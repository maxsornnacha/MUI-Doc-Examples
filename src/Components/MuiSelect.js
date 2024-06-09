import { Box, Stack , MenuItem, TextField } from "@mui/material"
import { useState } from "react";



const MuiSelect = () =>{
    const [value , setValue] = useState('');
    const [valueMultiple , setValueMultiple] = useState([]);

    return (
    <Stack spacing={2}>
            {/* Normal Selection */}
            <Box width='250px' >
            <TextField label='Select number' fullWidth select value={value} onChange={(event)=>setValue(event.target.value)}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            </Box>

            {/* Selection with multiple choices */}
            <Box width='250px' >
            <TextField label='Select numbers' 
            fullWidth
            select 
            value={valueMultiple} 
            onChange={(event)=>setValueMultiple(prev=>event.target.value)}
            SelectProps={{
                multiple: true
            }}
            size="small"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            </Box>
    </Stack>
    )
}

export default MuiSelect;