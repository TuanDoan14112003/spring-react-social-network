import React, { useState, useEffect }  from "react";
import { Box, Card, CardContent, Divider, IconButton, List, ListItem, ListItemText, Typography, SvgIcon, Button } from "@mui/material";
import axios from "axios";
import {ReactComponent as OptionIcon} from "../../../assets/icons/options.svg";


interface Event {
    id: number;
    name: string;
    desc: string;
    host: string;
    date: Date;
    image: string;
}

function MoviePlanItem(props: Event) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.date.toLocaleDateString()}
                </Typography>
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-around",

                    }}
                >
                    <Box
                        component="img"
                        src={props.image}
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "16px",
                            objectFit: "cover",
                        }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Typography variant= "h6" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            {props.desc}
                        </Typography>
                        <Typography variant="body1" component="div">
                            {props.host}
                        </Typography>
                    </Box>

                </Box>
            </CardContent>    
        </Card>
    )
}

export default function MoviePlanCard() {

    const [events, setEvents] = useState<Event[]>([]);



    const getEvents = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/events");
            setEvents(response.data as Event[]);
            } catch (err) {
                console.error(err);
            }
    }

    useEffect(() => {
        void getEvents();
    }, []);

    return(
        <Card>
            <CardContent>
               <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent: "space-between" }}>
                    <Typography variant="h5" component="div"
                     style={{ 
                        fontWeight: "bold",
                        background: "linear-gradient(269deg, #23D2E2 36.06%, #615DFA 100%)", 
                        backgroundClip: "text", 
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent"
                    }}>
                        Your Movie Plans
                    </Typography>
                    <IconButton>
                        <SvgIcon component={OptionIcon} viewBox="0 0 32 9"/>
                    </IconButton>
                </Box>
                
                {   events.length > 0 ?events.map((event) => 
                    <MoviePlanItem 
                        {...event} 
                    />): null}

                {
                    events.length > 0 ? 
                    <Button>
                        <Typography style={{ textTransform: "none" }} color="#CFD0D9">
                            See more
                        </Typography>
                    </Button> : 
                    <Typography style={{ textTransform: "none" }} color="#CFD0D9">
                        No events found
                    </Typography>
                }
              
                
            </CardContent>
        </Card>
    )
}