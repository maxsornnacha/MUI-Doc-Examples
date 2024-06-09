import { Box, Grid } from "@mui/material"


const MuiGrid = () =>{
    // We will use 'xs, sm, md, lg, xl ' props to make potion of grid from 1 - 12
    //Spacing can be add which is like margin example rowSpacing={2}, columnSpacing={1}
    return (
    <Grid container my={4}>
        <Grid item bgcolor={'primary.light'} p={2} xs={12} sm={6} md={5} lg={4}>
            <Box>Item1</Box>
        </Grid>
        <Grid item bgcolor={'primary.light'} p={2} xs={12} sm={6}>
            <Box>Item2</Box>
        </Grid>
        <Grid item bgcolor={'primary.light'} p={2} xs={12} sm={6}>
            <Box>Item3</Box>
        </Grid>
        <Grid item bgcolor={'primary.light'} p={2} xs={12} sm={6}>
            <Box>Item4</Box>
        </Grid>
    </Grid>
    )
}

export default MuiGrid;