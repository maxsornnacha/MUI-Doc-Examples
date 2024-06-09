import { InputAdornment, Stack , TextField } from "@mui/material";
import { useState } from "react";


const MuiTextfield = () =>{
    const [value , setValue] = useState('')

    return (
    <Stack spacing={2}>
       {/* Normal TextField */}
         <Stack spacing={4} direction={'row'}>
                <TextField label='omg' size="small" variant="outlined"/>
                <TextField label='name' size="small" variant="filled" />
                <TextField label='name' size="small" variant="standard"/>
         </Stack>

       {/* TextField Costomized 1*/}
         <Stack spacing={4} direction={'row'}>
                <TextField label='omg' size="small" variant="outlined" color="secondary" required/>
         </Stack>

         {/* TextField Costomized 2*/}
         <Stack spacing={4} direction={'row'}>
                <TextField label='Password' 
                type="password"
                size="small" 
                variant="outlined"
                 color="secondary" 
                 helperText='Do not share your password'
                 disabled
                 />
                   <TextField label='Read only' 
                size="small" 
                variant="outlined"
                 color="secondary" 
                 helperText='Do not share your password'
                 InputProps={{readOnly: true}}
                 />
         </Stack>

        {/* TextField with Adornment( which is like icon in front or at the end of input ) */}
         <Stack spacing={4} direction={'row'}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}/>
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position="end">KG</InputAdornment>
                }}/>
         </Stack>


         <Stack spacing={4} direction={'row'}>
         <TextField 
         value={value}
         onChange={event => setValue(event.target.value)}
         label='Password' 
         type="password"
         variant="outlined" 
         color="secondary" 
         required 
         error={!value?true:false}
         helperText={value?'Do not share your password with anyone':'Required'}
         />
         </Stack>
    </Stack>
    )
}

export default MuiTextfield;