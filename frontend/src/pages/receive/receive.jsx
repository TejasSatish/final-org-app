/* global BigInt */  //this comment is necessary or else BigInt will not work with react
import { React,useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
import axios from "axios";
import './receive.css'
export default function Receive(){

    const [recipientList, setRecipientList]=useState();

    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [locality,setLocality]= useState("")
    const [bloodType,setBloodType]= useState("")
    const [organ,setOrgan]= useState("")
    const [organSize,setOrganSize]= useState("")
    const hospital=window.localStorage.getItem("organisation");
    const { chainId: chainIdHex }= useMoralis()
    const chainId=parseInt(chainIdHex)
    const [recipientId,setRecipientId]=useState(null);
    const storageAddress=sepoliaContractAddress

    //create recipient contract
    const {runContractFunction: createNewRecipient}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"createNewRecipient",
        params:{
            _id: recipientId,
            _name: name,
            _age: age,
            _locality: locality,
            _bloodtype: bloodType,
            _organ: organ,
            _organSize: organSize,
            _hospitalName: hospital,
        },
    })

    //view recipients list contract
    const {runContractFunction: retrieveRecipients, error}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"retrieveRecipients",
        params:{},
    })

    function generateUniqueUint256() {
        // Create a Uint8Array to hold the 256 bits (32 bytes) of the ID.
        const idArray = new Uint8Array(32);
      
        // Fill the array with random values.
        crypto.getRandomValues(idArray);
      
        // Convert the Uint8Array to a Uint8ArrayView and then to a BigInt.
        const idBigInt = BigInt("0x" + Array.from(idArray).map(byte => byte.toString(16).padStart(2, '0')).join(''));
      
        return idBigInt;
      }

    function changeRecipientId(){        
        setRecipientId(generateUniqueUint256());
    }

    const handleSubmit=async (e)=>{
        const recipDetails={
            id: recipientId.toString(),
            name: name,
            age: age,
            locality: locality,
            bloodtype: bloodType,
            organ: organ,
            organSize: organSize,
            hospitalName: hospital,
        }
        
        axios.post("http://localhost:3001/receive",recipDetails,{
        'Content-Type': 'application/json'
        }).then((response)=>{
            const status=response.status
            if(status===200){
                console.log('sent success')
            }
            console.log(response.data);
            
        }) 
    }

    async function createRecipient(){
        changeRecipientId();

        const response = await createNewRecipient();   

        handleSubmit();
    }

    async function viewRecipients(){
        const response = await retrieveRecipients();
        setRecipientList(response);
        console.log(recipientList);
        console.log(error)
    }


    const {runContractFunction: resetAll}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"resetAll",
        params:{},
    })

    async function deleteAll(){
        const response = await resetAll();
        console.log(error)
    }

    return(
        <div>
            <div className="recipient">
                <input className="form-text" id="rec-name" type="text" placeholder="name" onChange= {(e)=> setName(e.target.value)}/> 
                <input className="form-text" id="rec-age" type="age" placeholder="age" onChange= {(e)=> setAge(e.target.value)}/> 
                <input className="form-text" id="rec-locality" type="text" placeholder="locality" onChange= {(e)=> setLocality(e.target.value)}/> 
                <input className="form-text" id="rec-bloodType" type="text" placeholder="blood type" onChange= {(e)=> setBloodType(e.target.value)}/> 
                <input className="form-text" id="rec-organ" type="text" placeholder="organ" onChange= {(e)=> setOrgan(e.target.value)}/>  
                <input className="form-text" id="rec-organSize" type="text" placeholder="organ size" onChange= {(e)=> setOrganSize(e.target.value)}/>
                <button className="btn" id="receive" onClick={createRecipient}>Receive</button><br/><br/>
            </div>
            <div className="existing-recipient">
                <button onClick={viewRecipients}>View existing recipients</button>
                <button onClick={deleteAll}>delete all</button>
                {
                    recipientList?.map((recipient)=>{
                   
                        const age=(recipient.age).toString();
                        if(age===0 || recipient.name===''||recipient.locality===''){
                            return(<div></div>)
                        }else{
                            return(
                                <div className="recipient" key={recipient._id}>
                                    Name: {recipient.name} age: {age} locality: {recipient.locality} organ: {recipient.organ} organ size: {recipient.organSize}
                                </div>
                            )
                        }
                        
                        
                    })
                }
            </div>
        </div>
    )
}