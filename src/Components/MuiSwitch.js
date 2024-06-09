import { FormControlLabel, Stack, Switch } from "@mui/material"
import { useState } from "react";


const MuiSwitch = ()=>{
    const [checked , setChecked] = useState(false);
    
    return(
    <Stack spacing={2}>
        {/* Normally use for Dark mode / light mode , which is like a toggle btn */}
        <FormControlLabel label={'Dark mode'}
        control={<Switch
        checked={checked}
        onChange={event=>setChecked(event.target.checked)}
        color="success"
        />}
        />
    </Stack>
    )
}

export default MuiSwitch;