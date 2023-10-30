import { AppBar, Box, Grid, Toolbar, Typography, Tab, Tabs, Button} from "@mui/material"
import { Link } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useState } from "react";
const Navbar=({links})=>{
    const [value, setValue]= useState(0)

    return(
        <AppBar>
            <Toolbar>
                <Grid sx={{placeItems:"center"}} container>
                    <Grid item xs={2}><LocalHospitalIcon/></Grid>
                    <Grid item xs={6}>
                        <Tabs
                         indicatorColor="secondary"
                         textColor="inherit" 
                         value={value} 
                         onChange={(e,val)=> setValue(val)}
                         >
                            <Tab label="Donate" to='/donate' component={Link}/>
                            <Tab label="Receive" to='/receive' component={Link}/>
                            <Tab label="Dashboard" to='/dashboard' component={Link}/>
                        </Tabs>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex">
                            <Button sx={{marginLeft:"auto"}} variant="contained">Connect</Button>
                            <Button sx={{marginLeft:"auto"}} variant="contained">Logout</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;