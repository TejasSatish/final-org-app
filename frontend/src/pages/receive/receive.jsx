import * as React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../../components/sidebar';
import { Grid } from '@mui/material';
const Receive=()=>{
    const receiveSidebarList= [
            {option : 'Add New Recipient',
            icon:'PersonAddIcon',
            linkTo:'/receive/add' },
            {option : 'View Existing Recipients',
            icon: 'ViewListIcon',
            linkTo:'/receive/view' },
            {option : 'View Recipient Matches',
            icon:'PreviewIcon',
            linkTo:'/receive/matches' }    
        ]

    return(
        <Grid container style={{ position: "relative", top: "120px"}} direction="row" justifyContent="flex-end" alignItems="center">
            <Grid item xs={12} sm={2}>
                <Sidebar tabList={ receiveSidebarList } />
            </Grid>

            <Grid item xs={12}sm={9}>
                <Outlet/> 
            </Grid>
            <Grid item xs={12}sm={1}>
            </Grid>
        </Grid>
    );
}

export default Receive;