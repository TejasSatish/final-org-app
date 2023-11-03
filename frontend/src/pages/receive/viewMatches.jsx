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

    // <Grid container xs={12}>

            
        //     <Grid item xs={12}>
        //         <Accordion>
        //             <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel1a-content"
        //             id="panel1a-header"
        //             >
        //                 <Typography>Accordion 1</Typography>
        //             </AccordionSummary>
        //             <AccordionDetails>
        //                 <Typography>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        //                     malesuada lacus ex, sit amet blandit leo lobortis eget.
        //                 </Typography>
        //             </AccordionDetails>
        //         </Accordion>
        //     </Grid>
        // </Grid>
    
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