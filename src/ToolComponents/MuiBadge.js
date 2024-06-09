import { Mail, Notifications } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";


const MuiBadge = () => {
    //Suitable to make for Notification system icons
    //If you want it to show 0 notifying no, you can use 'showZero' props
    //Default value is 99 but we can maximum value by using 'max' props
    //We can make no invisible by using 'invisible' props
    return (
    <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={10} color="secondary">
            <Notifications />
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero>
            <Notifications />
        </Badge>
        <Badge badgeContent={150} max={999} color="error" showZero>
            <Notifications />
        </Badge>

        <Badge variant="dot" color="primary" showZero>
            <Notifications />
        </Badge>
        <Badge variant="dot" color="primary" showZero invisible={true}>
            <Notifications />
        </Badge>
   
    </Stack>
    )
}

export default MuiBadge;