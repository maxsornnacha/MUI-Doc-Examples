import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

const MuiAutoComplete = () =>{
    const [value , setValue] = useState(null);
    
    return (
    <Stack spacing={2} width={'250px'}>
        {/* Its like choice selection that can be search */}
        
        {/* Normal AutoComplete TextField */}
        <Autocomplete 
        options={skills} 
        renderInput={(params)=><TextField {...params} label='skills'/>}
        value={value}
        onChange={(event,newValue)=>{setValue(newValue)}}
        />

        {/* Set freesolo to make it become search engine(Enable : store value of searching on state from Typing) */}
        <Autocomplete 
        options={skills} 
        renderInput={(params)=><TextField {...params} label='skills'/>}
        value={value}
        onChange={(event,newValue)=>{setValue(newValue)}}
        freeSolo
        />
    </Stack>
    )
}

export default MuiAutoComplete;