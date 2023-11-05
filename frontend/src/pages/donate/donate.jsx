import * as React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import { Grid } from '@mui/material';
//outlet is used to render a nested route's child component
// /donate/add and /donate/view will be render using Outlet
const Donate=()=>{

    const donateSidebarList=[
            {option : 'Add New Donor',
            icon:'PersonAddIcon',
            linkTo:'/donate/add' },
            {option : 'View Existing Donor',
            icon: 'ViewListIcon',
            linkTo:'/donate/view' }, 
        ]
      
    return (
        <Grid container style={{ position: "relative", top: "120px"}} direction="row" justifyContent="flex-end" alignItems="center">
            <Grid item xs={12}sm={9}>
                <Outlet/> 
            </Grid>
            <Grid item xs={12}sm={1}>
            </Grid>
        </Grid>
      );
}

export default Donate;