import { Stack , CircularProgress , LinearProgress } from "@mui/material";


const MuiLoadingProgress = () => {
    // able to use variant 'determinate' to stop loading
    // able to add value to make progress at percentage change

    return (
    <Stack spacing={2}>
        {/* Circle Progress */}
            <CircularProgress
            color="error"
            variant="determinate"
            value={60}
            />
            <CircularProgress
            color="success"
            />

        {/* Line | Linear Progress */}
            <LinearProgress
            color="warning"
            />
    </Stack>
    )
}

export default MuiLoadingProgress;