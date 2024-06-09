import { Stack , ImageList , ImageListItem , ImageListItemBar } from '@mui/material'

const MuiImageList = () =>{

    return (
    <Stack spacing={2}>
        <ImageList 
        sx={{width:'500px'}}
        cols={3}
        rowHeight={164}
        >
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src="https://cdn.pixabay.com/photo/2023/08/22/16/02/chrysanthemum-8206709_1280.jpg?w=164&h=164&fit=crop&auto=format&dpr=2"
                loading='lazy'
                alt='none'
                />
                <ImageListItemBar title='item example'/>
            </ImageListItem>
            
        </ImageList>
    </Stack>
    )
}

export default MuiImageList;