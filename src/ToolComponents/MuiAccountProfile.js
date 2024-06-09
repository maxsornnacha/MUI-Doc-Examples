import { Avatar, AvatarGroup, Stack } from "@mui/material";


const MuiAccountProfile = () => {
    return (
    <Stack spacing={4}>
    {/* Using Text */}
    <Stack direction={'row'} spacing={1}>
        <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor:'success.light'}}>CK</Avatar>
    </Stack>
    
    {/* Using Image */}
    <Stack direction={'row'} spacing={1}>
        <Avatar alt="profile1" src="https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg">BW</Avatar>
        <Avatar alt="profile2" src="https://cdn.pixabay.com/photo/2018/06/24/18/13/sunset-3495108_960_720.jpg">CK</Avatar>
    </Stack>

    {/* Making it fold or group */}
    {/* We can set max props to show the maximum of profile */}
    <Stack direction={'row'} spacing={1}>
    <AvatarGroup max={2}>
        <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor:'success.light'}}>CK</Avatar>
        <Avatar alt="profile1" src="https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg">BW</Avatar>
        <Avatar alt="profile2" src="https://cdn.pixabay.com/photo/2018/06/24/18/13/sunset-3495108_960_720.jpg">CK</Avatar>
    </AvatarGroup>
    </Stack>

    {/* You can use width and height on sx to adjust the size of profile*/}
    {/* You can use variant prop 'square','rounded' */}

    </Stack>
    )
}

export default MuiAccountProfile;