import { Box, Grid, Paper } from "@mui/material"
const Patient = (props) =>{
    //Name: {props.name} age: {(props.age)?.toString()} locality: {props.locality} organ: {props.organ} organ size: {props.size}
    return(
            <Paper variant ="outlined" elevation={24} sx={12} style={{backgroundColor:"#bbdbfa"}}>
                <Grid container spacing={1}  sx={{ p: '1rem'}}>
                    <Grid item xs={12}  sm={6}>
                        <Paper sx={{p:'1rem'}}>
                            Name: {props.name} 
                        </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={2}>
                        <Paper sx={{p:'1rem'}}>
                            age: {(props.age)?.toString()}     
                        </Paper>
                    </Grid>
                    <Grid item xs={12}  sm={4}>
                        <Paper sx={{p:'1rem'}}>
                            locality: {props.locality}    
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <Paper sx={{p:'1rem'}}>
                            organ: {props.organ}    
                        </Paper>
                        
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <Paper sx={{p:'1rem'}}>
                            organ size: {props.size}
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default Patient;