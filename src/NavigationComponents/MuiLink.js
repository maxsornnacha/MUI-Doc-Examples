import {  Link, Stack, Typography } from "@mui/material"


const MuiLink = () => {
    //Underline hover , none
    return (
    <Stack spacing={2}>
        <Link href='https://google.com'>click here</Link>
        <Link href='#' color={'secondary'}>Secondary</Link>
        <Link href='#' underline="hover">Secondary</Link>
        <Link href='https://google.com' variant="body2">click here</Link>
        <Typography variant="h6">
            <Link href='https://google.com'>click here</Link>
        </Typography>
    </Stack>
    )
}

export default MuiLink;