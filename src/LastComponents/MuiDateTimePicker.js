import { Stack } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker} from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from "react";

const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime , setSelectedTime] = useState(null);
    const [selectedDateTime , setSelectedDateTime] = useState(null);
    //1.Needed to install @mui/x-date-pickers by using "npm install @mui/x-date-pickers"
    //2.Needed to install package of the date library by using "npm install date-fns"
    //Optional the date library
    // or dayjs
    //npm install dayjs
    // or luxon
    //npm install luxon
    // or moment
    //npm install moment

    //3.Needed to install dayjs by using "npm install dayjs"

    return (
    <Stack spacing={4} sx={{width: '250px'}}>
        {/* Set Date by DatePicker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" 
        value={selectedDate}
        onChange={(newValue)=>setSelectedDate(newValue)}
        />
      </DemoContainer>


        {/* We can use views to filter the wanted data */}

      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" views={['month', 'year']} />
      </DemoContainer>



        {/* Set time by TimePicker */}
      <DemoContainer components={['DatePicker']}>
        <TimePicker label="Basic date picker"
        value={selectedTime}
        onChange={(newValue)=>setSelectedTime(newValue)}
        />
      </DemoContainer>

        {/* Set Data and Time by DateTimePicker */}
      <DemoContainer components={['DatePicker']}>
        <DateTimePicker label="Basic date picker"
        value={selectedDateTime}
        onChange={(newValue)=>setSelectedDateTime(newValue)}
        />
      </DemoContainer>

        </LocalizationProvider>
    </Stack>
    )
}

export default MuiDateTimePicker;