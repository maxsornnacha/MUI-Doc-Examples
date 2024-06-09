import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";


const MuiTooltip = () => {
    // Able to use 'placement' props 'top','bottom','left','right' to change the position
    // Able to use 'arrow' props to see as an arrow
    // Able to make it delay by 'enterDelay' and 'leaveDelay'
    return (
    <Tooltip 
    title='Delete' 
    placement="right" 
    arrow
    enterDelay={500}
    leaveDelay={250}
    >
    <IconButton>
        <Delete/>
    </IconButton>
    </Tooltip>
    )
}

export default MuiTooltip;