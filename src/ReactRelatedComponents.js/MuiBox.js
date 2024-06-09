import { Box } from "@mui/material";

const MuiBox = ()=>{
    // Box originally is used to replace div tag
    //We can use props component to change tag
    //We can also use props sx to change style
    return (
    <>
    <Box component={'span'}
    sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'200px',
        width:'200px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        '&:hover' : {
            backgroundColor:'primary.light',
            cursor:'pointer'
        }
    }}
    >
        Codevolution
    </Box>

    {/* MUI props for style */}
    <Box display={'flex'}
     height={'100px'} 
     width={'100px'} 
     bgcolor={'success.light'}
     p={2}
     >
    </Box>
    </>
    )
}

export default MuiBox;