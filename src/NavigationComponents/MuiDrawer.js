import { Drawer , Box , Typography, Button} from "@mui/material";
import { useState } from "react";


const MuiDrawer = () => {
    const [isDrawerOpen , setIsDrawerOpen] = useState(false);
    //Or we can call it sidebar
    return (
    <>
    <Drawer anchor='left' open={isDrawerOpen} onClick={()=>setIsDrawerOpen(false)}>
        <Box p={2} width={'250px'} textAlign={'center'} role="presentation">
            <Typography variant={'h6'} component={'div'}>
                SideBar
            </Typography>
        </Box>
    </Drawer>
    <Button onClick={()=>setIsDrawerOpen(true)} size="large" variant="outlined">
        Open Drawer | Sidebar
    </Button>
    </>
    )
}

export default MuiDrawer;