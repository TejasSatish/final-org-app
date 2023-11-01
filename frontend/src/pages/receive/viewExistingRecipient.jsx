import { useState, useEffect } from "react";
import { Box } from "@mui/material"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
import Recipient from "../../components/patient.jsx";
const ViewExistingRecipient =()=>{
    const [recipientList, setRecipientList]=useState([]);
    const [recipientListLength, setRecipientListLength]=useState(0);
    const hospital=window.localStorage.getItem("organisation");
    const storageAddress=sepoliaContractAddress

    //view recipients list contract
    const {runContractFunction: retrieveRecipients, error}= useWeb3Contract({
        abi:abi,
        contractAddress:storageAddress,
        functionName:"retrieveRecipients",
        params:{},
    })

    async function viewRecipients(){
        const response = await retrieveRecipients();
        setRecipientList(response);
        setRecipientListLength(response?.length);
    }

    useEffect(()=>{
        viewRecipients();
        console.log(recipientList)
    },[recipientListLength])

    
    return(
        <Box style={{maxHeight: 'calc(100% - 64)', overflow: 'auto'}}>
            
            {
                recipientList?.map((recipient)=>{
                    
                    if(recipient.name==='' || recipient.locality===''){
                        return
                    }
                    return <Recipient key={recipient._id} name={recipient.name} age={recipient.age} locality={recipient.locality} organ={recipient.organ} size={recipient.organSize}></Recipient>
                })
            }
        </Box>
    )

}

export default ViewExistingRecipient;