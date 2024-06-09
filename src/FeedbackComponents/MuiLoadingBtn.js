import { Stack } from "@mui/material"
import { LoadingButton} from '@mui/lab'
import { Save } from "@mui/icons-material";

const MuiLoadingBtn = () => {
    //Needed to install package of "mui lab"
    return (
    <Stack width={'1000px'} direction={'row'} spacing={2}>
        {/* Default btn loading */}
        <LoadingButton variant="contained">Submit</LoadingButton>
        <LoadingButton loading variant="contained">Submit</LoadingButton>
        
        {/* Text btn loading */}
        <LoadingButton variant="contained" loadingIndicator='Loading...'>Fetch data</LoadingButton>
        <LoadingButton loading variant="contained" loadingIndicator='Loading...'>Fetch data</LoadingButton>

        {/* Progress + Text btn loading */}
        <LoadingButton variant="contained" loadingPosition="start" startIcon={<Save/>}>Save</LoadingButton>
        <LoadingButton loading variant="contained" loadingPosition="start" startIcon={<Save/>}>Save</LoadingButton>
    </Stack>
    )
}

export default MuiLoadingBtn;