import axios from "axios";
import {useEffect, useState} from "react"
import { Box } from "@mui/material"
import ResultAccordion from "../../components/resultAccordion";

const ViewMatches=()=>{
    const [results,setResults]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/receive/matches")
        .then((res)=>{
            setResults(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

   
    return(
        <Box xs={12}>
            {
                results.table?.map((rItem)=>{
                    return <ResultAccordion matchObject={rItem}></ResultAccordion>
                })
            }
        </Box>
    )
}

export default ViewMatches;