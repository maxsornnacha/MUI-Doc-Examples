import { AccountCircle, Favorite, Home, Search } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";


const MuiBtnNavigation = () => {
    //Btns below like a mobile
    //We can use props showLabels to show the labels all the time
    const [value , setValue] = useState(0);
    return (
    <BottomNavigation
     sx={{width:'100vw',position:'absolute', bottom:0, left:0}}
     value={value}
     onChange={(event,newValue) => setValue(newValue)}
     showLabels
     >
        <BottomNavigationAction label="Home" icon={<Home/>} />
        <BottomNavigationAction label="Search" icon={<Search/>} />
        <BottomNavigationAction label="Favorite" icon={<Favorite/>} />
        <BottomNavigationAction label="Profile" icon={<AccountCircle/>} />
    </BottomNavigation>
    )
}

export default MuiBtnNavigation;