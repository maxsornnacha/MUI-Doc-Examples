import { Skeleton, Stack } from "@mui/material"


const MuiLoadingSkeleton = () => {
    //We can set variant as below
    //We can set animation by 'animation' props

    return (
    <Stack spacing={2} width={'250px'}>
        {/* For Text Info Loading | Line loading*/}
        <Skeleton variant="text"/>

        {/* For Avatar | Profile account Loading | Circle loading */}
        <Skeleton variant="circular" width={40} height={40}/>

        {/* For any Loading | Square loading */}
        <Skeleton variant="rectangular" width={250} height={125}/>

        {/* Animation Example */}
        <Stack spacing={2} direction={'row'}>
        <Skeleton variant="rectangular" width={250} height={125}
        animation="wave"
        />
        <Skeleton variant="rectangular" width={250} height={125}
        animation={false}
        />
        </Stack>
    </Stack>
    )
}

export default MuiLoadingSkeleton;
