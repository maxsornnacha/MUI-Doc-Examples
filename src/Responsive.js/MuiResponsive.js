import { Box, Stack } from '@mui/material'
 
const MuiResponsive = () => {

    return (
    <>
    <Box
        sx={{
            height : '300px',
            width : {
                xs : '100%',
                sm : '50%',
                md : '33%',
                lg : '25%',
                xl : '20%'
            },
            bgcolor: {
                xs : 'primary.main',
                sm : 'success.main',
                md : 'error.main',
                lg : 'secondary.main',
                xl : 'info.main'
            } 
        }}
        component="div"
        role="main"
    >
    </Box>
    <Stack
    direction={{ xs: 'column', sm: 'row' , md:'column', lg: 'row' }}
    spacing={{xs:1 , sm:2 , md:3 , lg:10}}
    >
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
    </Stack>
    </>
    )
}

export default MuiResponsive;