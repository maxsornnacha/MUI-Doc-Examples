import { Box, Paper, Stack } from "@mui/material"


const MuiPaper = () =>{
    // Paper will make it like A4 on Microsoft Word by adding shadow and border
    // We can use elevation to adjust the level of shadow and border
    return (
    <Stack>

    <Paper elevation={4}>
    <Box height={'500px'}
     width={'500px'} 
     display={'flex'}
      justifyContent={'center'} 
      alignItems={'center'}>
        Hello world
    </Box>
    </Paper>

    </Stack>
    )
}

export default MuiPaper;