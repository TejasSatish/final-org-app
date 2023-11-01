import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
import Donor from "../../components/patient.jsx";

const ViewExistingDonor=()=>{
    const [donorList, setDonorList]=useState([]);
    const [donorListLength, setDonorListLength]=useState(0);
    const storageAddress=sepoliaContractAddress
    //view donor list contract

    const {runContractFunction: retrieveDonors, error}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"retrieveDonors",
        params:{},
    })  

    async function viewDonors(){
        const response = await retrieveDonors();
        setDonorList(response)
        setDonorListLength(response?.length)
    }

    useEffect(()=>{
        viewDonors();
        console.log(donorList)
    },[donorListLength])

    return(
        <Box style={{maxHeight: 'calc(100% - 64)', overflow: 'auto'}}>
            
            {
                donorList?.map((donor)=>{
                    
                    if(donor.name==='' || donor.locality===''){
                        return
                    }
                    return <Donor key={donor._id} name={donor.name} age={donor.age} locality={donor.locality} organ={donor.organ} size={donor.organSize}></Donor>
                })
            }
        </Box>
    )
}

export default ViewExistingDonor;