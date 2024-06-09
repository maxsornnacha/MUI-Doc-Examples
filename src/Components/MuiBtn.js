import {
     Stack ,
     Button , 
     IconButton, 
     ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
    } from '@mui/material'
import { FormatBold, FormatItalic, FormatUnderlined, Send } from '@mui/icons-material'
import { useState } from 'react'


const MuiBtn = () =>{

    const [formats , setFormats] = useState([null])
    console.log(formats)

    const handleFormatChange = (event , updatedFormats) =>{
        setFormats(updatedFormats);
    }

return (
<Stack spacing={4}>
    
{/* Default Btn */}
<Stack spacing={2} direction={'row'}>
    <Button variant='text'>Text</Button>
    <Button variant='contained'>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
</Stack>

{/* Btn with color */}
<Stack spacing={2} direction={'row'}>
    <Button variant='contained' color='error'>Text</Button>
    <Button variant='contained' color='primary'>Text</Button>
    <Button variant='contained' color='info'>Text</Button>
    <Button variant='contained' color='secondary'>Text</Button>
    <Button variant='contained' color='success'>Text</Button>
    <Button variant='contained' color='warning'>Text</Button>
</Stack>

{/* Btn with size */}
<Stack display={'block'} spacing={2} direction={'row'}>
    <Button variant='contained' size='small' color='primary'>small</Button>
    <Button variant='contained' size='medium' color='warning'>medium</Button>
    <Button variant='contained' size='large' color='error'>large</Button>
</Stack>

{/* Btn with Icon */}
<Stack spacing={2} direction={'row'}>
    {/* Start with Icon */}
    <Button variant="contained" startIcon={<Send/>}
    onClick={()=>alert('Example')}
    >
        Send
    </Button>
    {/* End with Icon */}
    <Button variant="contained" endIcon={<Send/>} disableElevation={true} disableRipple={true}>
        Send
    </Button>
    {/* Only Icon */}
    <IconButton aria-label='send' color='success' size='large'>
            <Send/>
    </IconButton>
</Stack>

{/* Btn group alignment(vertical/horizontal) */}
<Stack direction={'row'}>
    <ButtonGroup aria-label='alignment button group' variant='outlined' color='secondary' orientation='vertical' size='small'>
    <Button onClick={()=>alert('left click')}>Left</Button>
    <Button>center</Button>
    <Button>right</Button>
    </ButtonGroup>
</Stack>

{/* Btn group multiple value */}
<Stack direction={'row'}>
    <ToggleButtonGroup aria-label='text formatting' value={formats}  onChange={handleFormatChange} size='small' color='success' orientation='vertical' exclusive>
            <ToggleButton value={'bold'} aria-label='bold'>
                <FormatBold/>
            </ToggleButton>
            <ToggleButton value={'italic'} aria-label='italic'>
                <FormatItalic/>
            </ToggleButton>
            <ToggleButton value={'underline'} aria-label='underline'>
                <FormatUnderlined/>
            </ToggleButton>
    </ToggleButtonGroup>
</Stack>

</Stack>
)

}


export default MuiBtn