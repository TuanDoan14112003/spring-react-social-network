import React from "react";
import { Card, CardContent, Divider, Grid, IconButton, Typography, SvgIcon, Box, Button } from "@mui/material";
import {ReactComponent as OptionIcon} from "../../../assets/icons/options.svg";
import {ReactComponent as WatchTogetherIcon} from "../../../assets/icons/watch-together.svg";
import {ReactComponent as ScheduleMovieIcon} from "../../../assets/icons/schedule-movie.svg";

export default function WatchTogetherCard() {

    return (
        <Card
        style={{ borderRadius: "15px", textAlign: "start" }}
        >
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
                        Watch Together
                    </Typography>
                    <IconButton>
                        <SvgIcon component={OptionIcon} viewBox="0 0 32 9"/>
                    </IconButton>
                </Box>
                
                <Box sx={{display: "flex", flexDirection:"row", justifyContent: "space-around"}}>
                        <Button 
                        style={{
                            height: "10rem",
                            display: "flex", 
                            flexDirection: "column", 
                            borderRadius: "16px"
                            }}>
                            <SvgIcon component={WatchTogetherIcon} 
                            viewBox="0 0 88 89"
                            sx={{
                                width: "50%",
                                height: "50%",
                            }}
                            />
                            <Typography  color= "black" fontWeight="700" textAlign = "center">
                                Watch Together!
                            </Typography>
                        </Button>
                        <Button
                        style={{
                            height: "10rem",
                            display: "flex", 
                            flexDirection: "column", 
                            borderRadius: "16px"
                            }}>
                                <SvgIcon 
                                component={ScheduleMovieIcon} 
                                viewBox="0 0 88 89"
                                sx={{
                                    width: "50%",
                                    height: "50%",}}
                                />
                                <Typography  color= "black" fontWeight="700" textAlign = "center" >
                                Schedule a Movie
                                </Typography>
                        </Button>
                </Box>

            </CardContent>
               
        </Card>
    );
}