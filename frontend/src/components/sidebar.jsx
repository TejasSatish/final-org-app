import {Box ,Drawer,Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ViewListIcon from '@mui/icons-material/ViewList';
import PreviewIcon from '@mui/icons-material/Preview';
import AddNewDonor from '../pages/donate/addNewDonor';

const Sidebar=({tabList})=>{
    const list = () => (
        <Box role="presentation">
          <List>
          {tabList.map((tab, index) => (
          <ListItem key={tab.option} disablePadding>
            <ListItemButton component={Link} to={`${tab.linkTo}`}>
              <ListItemIcon>
                  {(tab.icon == 'PersonAddIcon')?<PersonAddIcon/>:(tab.icon==='ViewListIcon')?<ViewListIcon/>:<PreviewIcon/>}
              </ListItemIcon>
              <ListItemText primary={tab.option} />
            </ListItemButton>
          </ListItem>
        ))}

          </List>
        </Box>
      );

    return(
        <>
              <Drawer
                variant='permanent'
                open={true}
                elevation={0}
                PaperProps={{
                    sx: {
                      height: 'calc(100% - 64px)',
                      width:'200px',
                      top: 64,
                    },
                  }}
                slotProps={{backdrop:{invisible:true}}}
              >
                {list()}
              </Drawer>
        </>
    );
}

export default Sidebar;