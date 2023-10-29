/* global BigInt */  //this comment is necessary or else BigInt will not work with react
import { React, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
import './donate.css'
export default function Donate(){

    const [donorList, setDonorList]=useState();

    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [locality,setLocality]= useState("")
    const [bloodType,setBloodType]= useState("")
    const [organ,setOrgan]= useState("")
    const [organSize,setOrganSize]= useState("")
    const [organLifetime,setOrganLifetime]= useState("")
    const hospital=window.localStorage.getItem("organisation");
    const { chainId: chainIdHex }= useMoralis()
    const chainId=parseInt(chainIdHex)
    const [donorId,setDonorId]=useState(null);
    const storageAddress=sepoliaContractAddress
    //create donor contract
    const {runContractFunction: createNewDonor}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"createNewDonor",
        params:{
            _id: donorId,
            _name: name,
            _age: age,
            _locality: locality,
            _bloodtype: bloodType,
            _organ: organ,
            _organSize: organSize,
            _organLife: organLifetime,
            _hospitalName: hospital,
        },
    })

    //view donor list contract

    const {runContractFunction: retrieveDonors, error}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"retrieveDonors",
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

    function changeDonorId(){        
        setDonorId(generateUniqueUint256());
    }

    async function createDonor(){
        changeDonorId();

        const response = await createNewDonor();
        
        console.log(response)
        
    }


    async function viewDonors(){
        const response = await retrieveDonors();
        setDonorList(response);
        console.log(donorList)
        console.log(error)
    }

    return(
        <div>
            <div className="donor">
                <input id="don-name" type="text" placeholder="name" onChange= {(e)=> setName(e.target.value)}/> 
                <input id="don-age" type="number" placeholder="age" onChange= {(e)=> setAge(e.target.value)}/> 
                <input id="don-locality" type="text" placeholder="locality" onChange= {(e)=> setLocality(e.target.value)}/> 
                <input id="don-bloodType" type="text" placeholder="blood type" onChange= {(e)=> setBloodType(e.target.value)}/> 
                <input id="don-organ" type="text" placeholder="organ" onChange= {(e)=> setOrgan(e.target.value)}/> 
                <input id="don-organSize"type="text" placeholder="organ size" onChange= {(e)=> setOrganSize(e.target.value)}/> 
                <input id="don-organLife"type="text" placeholder="organ lifetime" onChange= {(e)=> setOrganLifetime(e.target.value)}/> 
                <button id="donate" onClick={createDonor}>Donate</button><br/><br/>
            </div>
            <div className="existing-donor">
                <button onClick={viewDonors}>View existing donors</button> 
                {
                    donorList?.map((donor)=>{
                   
                        const age=(donor.age).toString();

                        return(
                            <div className="donor" key={donor._id}>
                                Name: {donor.name} age: {age} locality: {donor.locality} organ: {donor.organ} organ size: {donor.organSize}
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}