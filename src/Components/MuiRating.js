import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import { Favorite , FavoriteBorder} from "@mui/icons-material"


const MuiRating = () =>{
    const [value , setValue] = useState(null);

    return (
    <Stack spacing={2}>
        {/* Normal Rating */}
        <Rating
         value={value}
         onChange={(event,newValue)=>{setValue(newValue)}}
         precision={0.5}
         size="large"
         />

        {/* Rating with Icon */}
        <Rating
         value={value}
         onChange={(event,newValue)=>{setValue(newValue)}}
         precision={0.5}
         size="large"
         icon={<Favorite fontSize="inherit" color="error"/>}
         emptyIcon={<FavoriteBorder fontSize="inherit"/>}
         />
    </Stack>
    )
    
}

export default MuiRating;