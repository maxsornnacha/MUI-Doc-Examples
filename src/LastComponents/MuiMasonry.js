import { Box,
         Paper,
         Accordion,
         AccordionDetails,
         Typography,
         AccordionSummary
    } from '@mui/material'
import { Masonry } from '@mui/lab'
import { ExpandMore } from '@mui/icons-material'

const MuiMasonry = () => {
    const heights = [ 150 , 30 , 90 , 70 , 110 , 150 ,130,
        80, 50, 90, 100, 150, 30, 50, 80
    ]

    return (
    <Box sx={{ width:500 , minHeight: 400 }}>
        <Masonry columns={4} spacing={1}>
            {
                heights.map((h , index)=>{
                    return (
                    <Paper key={index}
                    sx={{//display:'flex', 
                        //justifyContent:'center',
                        //alignItems:'center',
                       // height: h,
                        border:'1px solid'
                    }}
                    >
                    <Accordion sx={{ minHeight:h}}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                        <Typography variant='h6'>
                                {index+1}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Context
                        </AccordionDetails>
                    </Accordion>
                    </Paper>   
                    )
                })
            }
        </Masonry>
    </Box>
    )
}

export default MuiMasonry;