import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';



interface Event {
    id: number;
    name: string;
    desc: string;
    date: Date;
}


export default function CalendarCard() {
    const [events, setEvents] = useState([]);
    const [date, setDate] = useState(new Date());


    function getDaySuffix(day: number) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    function getWeekDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = date.getDay();
        return `${days[day]} ${date.getDate()}${getDaySuffix(date.getDate())}`;
    }



    return (
        <Card style={{ borderRadius: "15px", textAlign: "start" }}>
            <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        sx={{ 
                            ".MuiPickersCalendarHeader-label": {
                            fontWeight: "bold", 
                            fontSize: "1.2rem",
                        }  
                    }}
                    // date={new Date()}
                    // onChange={() => {
                    // // Do something when the date changes
                    // }}
                    />
                </LocalizationProvider>
                <Divider />
                <Typography style={{ marginTop: "12%" }}>
                    {getWeekDay()}
                </Typography>
                <List>
                    {events.length >= 1 ? events.map((event: Event) => (
                        <ListItem key={event.id}>
                            <ListItemText primary={event.name} secondary={event.desc} />
                        </ListItem>
                    )) : <Typography>No events today</Typography>}
                </List>
            </CardContent>
        </Card>
    );
}
