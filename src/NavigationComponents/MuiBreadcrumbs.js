import { Box , Breadcrumbs , Link , Typography } from "@mui/material"
import { NavigateNext } from '@mui/icons-material'

const MuiBreadcrumbs =  () => {
        //We can customize the breadcrumb's separator
        //We can use maxItems to show the number of Links
        //We can use itemsAfterCollapse to show the number of Links after the last one
        //We can use itemsBeforeCollapse to show the number of Links before the first one
    return (
    <Box m={2}>
        <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={<NavigateNext fontSize="small"/>}
        maxItems={2}
        itemsBeforeCollapse={2}
        >
                <Link underline="hover" href='#'>Home</Link>
                <Link underline="hover" href='#'>Catalog</Link>
                <Link underline="hover" href='#'>Accessories</Link>
                <Typography color="text.primary">Shirts</Typography>
        </Breadcrumbs>
    </Box>
    )
}

export default MuiBreadcrumbs;