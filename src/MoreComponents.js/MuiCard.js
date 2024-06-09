import { Box, Card , CardContent, Typography , CardActions , Button, CardMedia } from "@mui/material";

const MuiCard = () => {

    return (
    <Box width={'300px'}>
        <Card elevation={4}>
            {/* Adding Image */}
            <CardMedia
                component={'img'}
                height={'140'}
                image={'https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg'}
                alt="Random image"
            />
            {/* Adding Content */}
             <CardContent>
                 <Typography gutterBottom variant="h5" component={'div'}>Mui Card</Typography>
                 <Typography variant="body2" color={'text.secondary'}  component={'div'}>This is a card</Typography>
             </CardContent>
             {/* Adding Btn */}
             <CardActions>
                <Button>SHARE</Button>
                <Button>LEARN MORE</Button>
            </CardActions>
        </Card>
    </Box>
    )
}

export default MuiCard;