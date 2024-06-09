import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { Box ,
         FormControlLabel , 
         Checkbox , 
         Stack,
        FormControl,
        FormLabel,
        FormGroup,
        FormHelperText
    } from '@mui/material'
import { useState } from 'react'


const MuiCheckbox = () =>{
    const [value , setValue]  = useState(false);
    const [skills, setSkills] = useState([]);

    const handleSkillChange = (event)=>{
        const skill = event.target.value;
        if(skills.indexOf(skill) > -1){
            setSkills(skills.filter(s=>s !== skill));
        }
        else{
            setSkills(prev=>[...prev, skill]);
        }
    }


    return (
    <Stack spacing={2}>
        {/* Normal CheckBox */}
        <Box>
            <FormControlLabel 
            label='I accept the terms and conditions'
            control={<Checkbox checked={value} onChange={(event)=>{setValue(event.target.checked)}}/>}
            />
        </Box>

        {/* CheckBox with Icon */}
        <Box>
            <Checkbox 
            icon={<BookmarkBorder/>}
            checkedIcon={<Bookmark/>}    
            checked = {value}
            onChange={(event)=>{setValue(event.target.checked)}}
            color='secondary'
            />
        </Box>

        {/* Multiple ChatBoxs */}
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                    control={<Checkbox value={'html'} 
                    checked={skills.includes('html')}
                    onChange={handleSkillChange}
                    />}
                    label='HTML'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'CSS'}
                    checked={skills.includes('CSS')}
                    onChange={handleSkillChange}
                    />}
                    label='CSS'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'JavaScript'}
                    checked={skills.includes('JavaScript')}
                    onChange={handleSkillChange}
                    />}
                    label='JavaScript'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'React'}
                    checked={skills.includes('React')}
                    onChange={handleSkillChange}
                    />}
                    label='React'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Redux'}
                    checked={skills.includes('Redux')}
                    onChange={handleSkillChange}
                    />}
                    label='Redux'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Node'}
                    checked={skills.includes('Node')}
                    onChange={handleSkillChange}
                    />}
                    label='Node'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'MongoDB'}
                    checked={skills.includes('MongoDB')}
                    onChange={handleSkillChange}
                    />}
                    label='MongoDB'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Express'}
                    checked={skills.includes('Express')}
                    onChange={handleSkillChange}
                    />}
                    label='Express'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Python'}
                    checked={skills.includes('Python')}
                    onChange={handleSkillChange}
                    />}
                    label='Python'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Django'}
                    checked={skills.includes('Django')}
                    onChange={handleSkillChange}
                    />}
                    label='Django'
                    />
                    <FormControlLabel
                    control={<Checkbox value={'Flask'}
                    checked={skills.includes('Flask')}
                    onChange={handleSkillChange}
                    />}
                    label='Flask'
                    />
                </FormGroup>
                <FormHelperText>
                    Required
                </FormHelperText>
            </FormControl>
        </Box>
    </Stack>
    )
}

export default MuiCheckbox