import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Divider, Stack } from "@mui/material";


const MuiAlert = () => {
    //We can set 'variant' as 'outlined','filled'
    // We can change Icon by using 'icon' props
    // We can have closing toggle by us onClose()
    // We can set Action by using 'action' props
    return (
    <Stack spacing={1}>
        <Alert variant="outlined" severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
        </Alert>
        <Alert variant="filled" severity="info">
            <AlertTitle>Info</AlertTitle>
            This is a info alert — check it out!
        </Alert>
        <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
        </Alert>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is a error alert — check it out!
        </Alert>

        <Divider/>
        <Alert severity="success" icon={<Check/>}>
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
        </Alert>

        <Divider/>
        <Alert severity="success" icon={<Check/>} onClose={()=>alert('close btn')}>
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
        </Alert>

        <Divider/>
        <Alert severity="success" icon={<Check/>} action={<Button color="inherit" size="small">Undo</Button>}>
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
        </Alert>
    </Stack>
    );
}

export default MuiAlert;