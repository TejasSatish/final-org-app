import { React, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
export default function Donate(){
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
    var donorId=Math.random()*1000000;
    const storageAddress=sepoliaContractAddress
    const {runContractFunction: createNewDonor, error}= useWeb3Contract({
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

    async function createDonor(){
        const response = await createNewDonor();
        
        console.log(response)
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
        </div>
    )
}