import { useState, useEffect } from "react";
import { AppBar, Box, Grid, Toolbar, Typography, Tab, Tabs, Button} from "@mui/material"
import { Link, useLocation } from "react-router-dom";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useMoralis} from "react-moralis"
const Appbar=()=>{
    const [value, setValue]= useState()
    const location = useLocation();

    const {enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 }=useMoralis();

    useEffect(()=>{
        if(isWeb3Enabled) return
        if(typeof window!=="undefined"){
            if(window.localStorage.getItem("connected")){
                enableWeb3()
            }
        }

    },[isWeb3Enabled])

    useEffect(()=>{
        Moralis.onAccountChanged((account)=>{
            console.log(`${account}`)
            if(account==null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    },[])

    // navbar renders blank
    if(location.pathname === "/" ||location.pathname === "/register") {
        return <div/>
    }

    return(
        <AppBar>
            <Toolbar>
                <Grid sx={{placeItems:"center"}} container>
                    <Grid item xs={3}>
                        <Box display="flex">
                            <LocalHospitalIcon fontSize="large"/>
                            <Typography variant="h4">{window.localStorage.getItem("organisation")}</Typography>
                        </Box>    
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h4"></Typography>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex">
                            {account?
                                <Button 
                                 sx={{marginLeft:"auto"}}
                                 variant="contained">{account.slice(0,6)}...{account.slice(account.length-4)}</Button>:
                            <Button
                             sx={{marginLeft:"auto"}}
                             variant="contained"
                             onClick={
                                async ()=>{ await enableWeb3()
                                    if(typeof window!=="undefined"){
                                        window.localStorage.setItem("connected","injected")
                                    }
                                }
                            }>Connect</Button>}
                            <Button  component= {Link} to="/" sx={{marginLeft:"auto"}} variant="contained">Logout</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;