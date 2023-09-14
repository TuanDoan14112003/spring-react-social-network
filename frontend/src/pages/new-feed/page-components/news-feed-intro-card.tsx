import { Card, CardContent, Typography } from "@mui/material";
import NewsFeedBackground from "../../../assets/icons/new-feed.svg";

export default function NewsFeedIntroCard() {
    return (
        <Card
            sx={{
                width: "100%",
                borderRadius: "15px",
                textAlign: "left",
               
                background: "linear-gradient(90deg, #615DFA 0%, #23D2E2 100%)",
            }}
        >

            <CardContent sx={{
                 backgroundImage: `url(${NewsFeedBackground})`,
                 backgroundSize: "100% 100%",
            }}>
                <Typography variant="h4" component="div" color="white" fontWeight="bold">
                    Newsfeed
                </Typography>
                <Typography variant="subtitle1" component="div" color="white">
                    Check what your friends are up to!
                </Typography>
            </CardContent>
        </Card>
    );
}