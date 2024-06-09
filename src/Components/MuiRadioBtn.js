import { 
     Stack,
     Box, 
     FormControl,
     FormLabel,
     FormControlLabel,
     RadioGroup,
     Radio,
     FormHelperText
    } from "@mui/material";
import { useState } from "react";


const MuiRadioBtn = () => {
    const [value , setValue] = useState('');

    return (
    <Stack spacing={2}>
        {/* Its like many choice in the exam */}
        <Box>
            <FormControl error={!value?true:false} required>
                 <FormLabel 
                 id="job-experience-group-label"
                 color="warning"
                 >
                        Years of experience
                 </FormLabel>
                 <RadioGroup 
                 name="job-experience-group"
                 aria-labelledby="job-experience-group-label"
                 value={value}
                 onChange={event=>setValue(event.target.value)}
                 row
                 >
                    <FormControlLabel 
                    control={<Radio color="warning" size="medium"/>} 
                    label='0-2' value='0-2'
                    />
                    <FormControlLabel 
                    control={<Radio color="warning" size="medium"/>} 
                    label='3-5' value='3-5'
                    />
                    <FormControlLabel 
                    control={<Radio color="warning" size="medium"/>} 
                    label='6-10' value='6-10'
                    />
                 </RadioGroup>
                 <FormHelperText>
                    {!value?'Required':'Please select carefully'} 
                 </FormHelperText>
            </FormControl>
        </Box>
        
    </Stack>
    )
}

export default MuiRadioBtn;