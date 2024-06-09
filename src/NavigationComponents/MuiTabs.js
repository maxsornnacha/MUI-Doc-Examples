import { Box, Tab } from "@mui/material";
import { TabContext , TabList , TabPanel } from "@mui/lab";
import { useState } from "react";
import { Favorite } from "@mui/icons-material";


const MuiTabs = () => {
    //Needed to install 'mui lab' before using

    const [value , setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    //We can use textColor for changing text color of tabs 
    //We can use indicatorColor for changing indicator color of tabs
    //We can use iconPosition for changing icon position of tabs
    //We can use centered for centering the tabs
    //We can use ScrollBottom to make tabs scrollable by using variant="scrollable" ,scrollButtons="auto"
    return (
    <Box>
        <TabContext value={value}>
                {/* This part is tab toggle */}
                <Box sx={{borderBottom: 1 , borderColor: 'divider' , width:'240px'}}>
                    <TabList aria-label="Tabs example"
                     onChange={handleChange}
                     textColor="secondary" 
                     indicatorColor="secondary"
                     variant="scrollable"
                     scrollButtons="auto"
                     >
                        <Tab label='Tab One' value='1' icon={<Favorite/>} iconPosition="start"/>
                        <Tab label='Tab Two' value='2' disabled/>
                        <Tab label='Tab Three' value='3'/>
                        <Tab label='Tab Four' value='4' icon={<Favorite/>} iconPosition="start"/>
                        <Tab label='Tab Five' value='5' disabled/>
                        <Tab label='Tab Six' value='6'/>
                    </TabList>
                </Box>
                {/* This part is the outcome displaying on the screen */}
                <TabPanel value='1'>Panel one</TabPanel>
                <TabPanel value='2'>Panel two</TabPanel>
                <TabPanel value='3'>Panel three</TabPanel>
                <TabPanel value='4'>Panel four</TabPanel>
                <TabPanel value='5'>Panel five</TabPanel>
                <TabPanel value='6'>Panel six</TabPanel>
        </TabContext>
    </Box>
    )
}

export default MuiTabs;