import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    Paper,

} from '@mui/material'

const MuiTable = () => {
    //We can use Component 'Paper' to help style shadowing and border
    //We can use align to make alignment
    //We can use stickyHeader to make sticky on TableHead
    return (
    <TableContainer component={Paper} sx={{maxHeight:'200px'}}>
        <Table aria-label='table example' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell align='start'>Id</TableCell>
                    <TableCell align='start'>First name</TableCell>
                    <TableCell align='start'>Last name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow 
                sx={{ '&:last-child td, &:last child th': {border: 0}}}
                >
                    <TableCell align='start'>1</TableCell>
                    <TableCell align='start'>Sornnacha</TableCell>
                    <TableCell align='start'>Buranapongwattana</TableCell>
                    <TableCell align='center'>max@gmail.com</TableCell>    
                </TableRow>
                <TableRow 
                sx={{ '&:last-child td, &:last child th': {border: 0}}}
                >
                    <TableCell align='start'>2</TableCell>
                    <TableCell align='start'>Sornnacha</TableCell>
                    <TableCell align='start'>Buranapongwattana</TableCell>
                    <TableCell align='center'>max@gmail.com</TableCell>    
                </TableRow>
                <TableRow 
                sx={{ '&:last-child td, &:last child th': {border: 0}}}
                >
                    <TableCell align='start'>3</TableCell>
                    <TableCell align='start'>Sornnacha</TableCell>
                    <TableCell align='start'>Buranapongwattana</TableCell>
                    <TableCell align='center'>max@gmail.com</TableCell>    
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default MuiTable;