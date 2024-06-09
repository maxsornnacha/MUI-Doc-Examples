import { Edit, FileCopyOutlined, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";


const MuiSpeedDial = () => {
    //ITs like bottom-right part of the screen + / x
    //SpeedDialAction is used to show the lists
    //openIcon is used to show the icon when the speed dial is open
    //tooltipOpen is used to show the tooltip without hovering over
    return (
    <SpeedDial ariaLabel="Navigation speed dial"
    sx={{position:'absolute', bottom:16 , right:16}}
    icon={<SpeedDialIcon openIcon={<Edit/>}/>}
    >
        <SpeedDialAction icon={<FileCopyOutlined/>} tooltipTitle='Copy' />
        <SpeedDialAction icon={<Print/>} tooltipTitle='Print' tooltipOpen/>
        <SpeedDialAction icon={<Share/>} tooltipTitle='Share' tooltipOpen/>
    </SpeedDial>
    )
}

export default MuiSpeedDial;