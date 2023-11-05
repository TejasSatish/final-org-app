import { Link, useLocation } from "react-router-dom";
import {Box ,Drawer,Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ViewListIcon from '@mui/icons-material/ViewList';
import PreviewIcon from '@mui/icons-material/Preview';
import AddNewDonor from '../pages/donate/addNewDonor';

const Sidebar=({tabList})=>{
  const location = useLocation();
  
  const list = () =>(
    <Box role="presentation">
      <List>
      {tabList.map((tab, index) => (
        <Box key={index}>
          {(tab.icon=='')?<Divider/>:''}
          <ListItem  disablePadding>
            <ListItemButton component={Link} to={`${tab.linkTo}`}>
              <ListItemIcon>
                  {(tab.icon != '')?((tab.icon == 'PersonAddIcon')?<PersonAddIcon/>:(tab.icon==='ViewListIcon')?<ViewListIcon/>:<PreviewIcon/>):''}
              </ListItemIcon>
              <ListItemText primary={tab.option} />
            </ListItemButton>
          </ListItem>
          {(tab.icon=='')?<Divider/>:''}
        </Box>
    ))}
      </List>
    </Box>
  );

  if(location.pathname === "/" ||location.pathname === "/register") {
    return <div/>
  }

    return(
        <>
              <Drawer
                variant='permanent'
                open={true}
                elevation={0}
                PaperProps={{
                  sx: {
                    width: "16%",
                    height:"calc(100%)-64px",
                    top: 64,
                  }
                }}
                slotProps={{backdrop:{invisible:true}}}
              >
                {list()}
              </Drawer>
        </>
    );
}

export default Sidebar;