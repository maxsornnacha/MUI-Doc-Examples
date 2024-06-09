import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Box
} from '@mui/material'
import { useState } from 'react';

const MuiModalDialog = () => {
    const [open, setOpen] = useState(false);

    return (
    <Box my={4}>
        <Button variant='contained' onClick={()=>setOpen(true)}>Open dialog</Button>
        <Dialog open={open}>
            <DialogTitle >Dialog Title</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Dialog Content Dialog Content Dialog Content Dialog Content Dialog Content
                    Dialog Content Dialog Content Dialog Content Dialog Content Dialog Content
                    Dialog Content Dialog Content Dialog Content Dialog Content Dialog Content
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button>Yes</Button>
                <Button onClick={()=>setOpen(false)}>No</Button>
            </DialogActions>
        </Dialog>
    </Box>
    )
}

export default MuiModalDialog;