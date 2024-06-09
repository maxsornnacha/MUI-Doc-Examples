import { Stack , Chip , Avatar, Divider } from "@mui/material"
import { Face } from "@mui/icons-material";
import { useState } from "react";


const MuiChip = () => {
    const [chips , setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
    return (
    <>
    <Stack direction={'row'} spacing={1} my={2}>
        <Chip 
        label='Chip' 
        color="primary"
        size="small"
        />
         <Chip 
        label='Chip Outline + Avartar' 
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>} 
        />
        <Chip 
        label='Chip Outline + Icon' 
        color="secondary"
        size="small"
        variant="outlined"
        icon={<Face/>} 
        />
        <Chip
        label='Be able to click'
        color="error"
        size="small"
        onClick={() => alert('click')}
        />
        <Chip
        label='Import Delete Function'
        color="error"
        size="small"
        onClick={() => alert('click')}
        onDelete={()=> alert('delete')}
        />
    </Stack>
    <Divider/>
    {/* Example of using chips */}
    <Stack direction={'row'} spacing={2} my={2}>
         {
            chips.map((chip,index)=>{
                return (
                <Chip 
                key={index} 
                label={chip}
                size="small"
                onClick={() => alert('click')}
                onDelete={()=>{ setChips(chips.filter((v,i)=>i !== index)) }}
                />
                )
            })
        }
    </Stack>
    </>
    )
}

export default MuiChip;