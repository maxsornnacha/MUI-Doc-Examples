import { Box, Stack , Divider } from "@mui/material"

const MuiStack = () => {
    // Stack working like cover page
    // Can use with Divider to make a dividing line
    // Being useful for 1 dimension layout
    return (
    <Stack sx={{
        border: '1px solid black'
    }}
    direction="column-reverse"
    spacing={2}
    divider={<Divider orientation="horizontal" flexItem/>}
    >
        <Box>Hello World1</Box>
        <Box>Hello World2</Box>
    </Stack>
    )
}

export default MuiStack;