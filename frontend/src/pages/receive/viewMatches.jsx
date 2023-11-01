import axios from "axios";
import {useEffect, useState} from "react"
import { Box } from "@mui/material"
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
        <Box>
            {results.table}
        </Box>
    )
}

export default ViewMatches;