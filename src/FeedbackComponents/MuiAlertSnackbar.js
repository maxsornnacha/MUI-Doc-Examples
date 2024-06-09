import { Button, Snackbar, Box , Alert } from "@mui/material";
import { useState , forwardRef } from "react";

// This is used for customized snackbar alert
const SnackbarAlert = forwardRef(
    (props, ref) => {
        return <Alert
        elevation={6}
        {...props}
        ref={ref}
        />
    }
)

const MuiAlertSnackbar = () => {
    const [ open , setOpen] = useState(false);
    const [ open1 , setOpen1] = useState(false);

    const handleClose = (event , reason) =>{
        //This is for prevent 'clickaway' to close the alert
        if(reason === 'clickaway'){
            return
        }
        setOpen(false);
    }

    const handleClose1 = (event , reason) =>{
        //This is for prevent 'clickaway' to close the alert
        if(reason === 'clickaway'){
            return
        }
        setOpen1(false);
    }

    return (
    <Box my={4}>
        {/* Default Snackbar Alert */}
        <Button variant="contained" onClick={()=>setOpen(true)}>Submit</Button>
        <Snackbar
        message='Form submitted successfully'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        />

        {/* Customized Snackbar Alert */}
        <Button variant="contained" onClick={()=>setOpen1(true)}>Submit Customized Aleart</Button>
        <Snackbar 
        open={open1}
        autoHideDuration={6000}
        onClose={handleClose1}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        >
            {/* This Snackbar is from using forwardRef by React */}
            <SnackbarAlert severity="success" onClose={handleClose1}>
                Form submitted successfully
            </SnackbarAlert>
        </Snackbar>
    </Box>
    )
}

export default MuiAlertSnackbar;