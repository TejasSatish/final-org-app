import { Box, Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Donor from "../components/patient.jsx"
const ResultAccordion=(matchObject)=>{

    return(
        
        <Grid container xs={12}>    
            <Grid item xs={12}>
                <Accordion xs={12}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    xs={12}
                    >
                        <Donor key={matchObject.matchObject.id} name={matchObject.matchObject.name} age={matchObject.matchObject.age} locality={matchObject.matchObject.locality} organ={matchObject.matchObject.organ} size={matchObject.matchObject.size} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {
                                Object.entries(matchObject.matchObject.matches).map(([key,value])=>{
                                    return <Donor key={key} name={value.Name} age={value.Age} locality={value.Locality} organ={value.organ} size={value.Size} />
                                })
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    )
}

export default ResultAccordion;