import { Accordion , AccordionSummary , AccordionDetails, Box, Typography} from "@mui/material";
import { ExpandMore } from "@mui/icons-material"
import { useState } from "react";
const MuiAccordion = () =>{ 

    const [expanded , setExpanded] = useState(false);

    const handleChange = (isExpanded , panel) =>{
       setExpanded(isExpanded? panel : false);
    }

    return(
    <Box>
        {/* Normal Accodion */}
        <Accordion >
            <AccordionSummary 
            id="panel1-header" 
            aria-controls="panel1-content"
            expandIcon={<ExpandMore/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown 
                  printer took a galley of type and scrambled it to make a 
                  type specimen book. It has survived not only five centuries, 
                  but also the leap into electronic typesetting, remaining 
                  essentially unchanged. It was popularised in the 1960s with
                   the release of Letraset sheets containing Lorem Ipsum passages, 
                   and more recently with desktop publishing software like Aldus 
                   PageMaker including versions of Lorem Ipsum.
                </Typography>
            </AccordionDetails>
        </Accordion>


        {/* Accordion Group */}
        <Accordion expanded={ expanded === 'panel1'} onChange={(event , isExpanded)=>{handleChange(isExpanded , 'panel1')}}>
            <AccordionSummary 
            id="panel1-header" 
            aria-controls="panel1-content"
            expandIcon={<ExpandMore/>}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={ expanded === 'panel2'} onChange={(event , isExpanded)=>{handleChange(isExpanded , 'panel2')}}>
            <AccordionSummary 
            id="panel2-header" 
            aria-controls="panel2-content"
            expandIcon={<ExpandMore/>}
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown 
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={ expanded === 'panel3'} onChange={(event , isExpanded)=>{handleChange(isExpanded , 'panel3')}}>
            <AccordionSummary 
            id="panel3-header" 
            aria-controls="panel3-content"
            expandIcon={<ExpandMore/>}
            >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
    )
}

export default MuiAccordion;