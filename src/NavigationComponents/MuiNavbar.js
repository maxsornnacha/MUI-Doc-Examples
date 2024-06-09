import { AppBar , 
        Button,
        IconButton,
         Stack, 
        Toolbar, 
        Typography,
        Menu, 
        MenuItem
} from '@mui/material'
import { CatchingPokemon, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useState } from 'react'

const MuiNavbar = () => {

    const [anchorElement, setAnchorElement] = useState(null);
    const open = anchorElement
    const handleClick = (event) => {
        //We will get element tag such as <Button> or <Stack> as a value
        setAnchorElement(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorElement(null);
    }

    return (
    <AppBar sx={{backgroundColor:'purple'}}>
        <Toolbar>
            <IconButton  color='inherit' size='large' aria-label='logo'>
                <CatchingPokemon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                POKEMONAPP
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                {/* Test Menu */}
                <Button color='inherit' 
                onClick={handleClick}
                aria-controls={open?'resources-menu':undefined}
                aria-haspopup='true'
                aria-expanded={open?'true':undefined}
                endIcon={open?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
                >
                    resources
                </Button>

                <Button color='inherit'>Login</Button>
            </Stack>
            {/* Menu Displaying */}
            <Menu id='resources-menu' anchorEl={anchorElement} 
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'right'
            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
            >
                <MenuItem>Blog</MenuItem>
                <MenuItem>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
    )
}

export default MuiNavbar;