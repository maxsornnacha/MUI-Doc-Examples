import { Box , List , ListItem , ListItemText , ListItemAvatar  , Avatar, ListItemIcon, ListItemButton, Divider} from "@mui/material";
import { Mail } from "@mui/icons-material";


const MuiList = () => {

    return (
    <Box sx={{width:'400px' , bgcolor: '#efefef'}}>
        <List>

            <ListItem>
                {/* Using normal Icon */}
                <ListItemIcon>
                        <Mail/>
                </ListItemIcon>

                <ListItemText primary="List Item 1" secondary='Secondary Text' />

            </ListItem>

                {/* Using Divider to divide the list */}
            <ListItem>

                <ListItemIcon>
                        <Mail/>
                </ListItemIcon>

                <ListItemText primary="List Item 1" secondary='Secondary Text' />

            </ListItem>
            <Divider/>

            <ListItem>
                {/* Using avatar or profile account as an Icon */}
                 <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <Mail/>
                    </Avatar>
                </ListItemAvatar>
                </ListItemIcon>

                <ListItemText primary="List Item 2" secondary='Secondary Text'/>

            </ListItem>

                {/* Making list able to click by 'ListItemButton' Component */}
                {/* Using disablePadding to remove padding */}
            <ListItem disablePadding>
            <ListItemButton>

                <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                        <Mail/>
                    </Avatar>
                </ListItemAvatar>
                </ListItemIcon>

                <ListItemText primary="List Item 3" secondary='Secondary Text' />

            </ListItemButton>
            </ListItem>

        </List>
    </Box>
    )
}

export default MuiList;