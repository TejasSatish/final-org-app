import {Box ,Drawer,Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ViewListIcon from '@mui/icons-material/ViewList';
import PreviewIcon from '@mui/icons-material/Preview';

const Sidebar=({optionsList, tab})=>{

    //create renderComponent()
    const list = () => (
        <Box role="presentation">
          <List>
          {optionsList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={renderComponent(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <PersonAddIcon/> : <ViewListIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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