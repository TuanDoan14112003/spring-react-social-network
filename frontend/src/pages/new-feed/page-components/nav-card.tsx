import React, { useState, useEffect } from "react";
import { Card,CardContent, Box, Tabs, Tab} from "@mui/material";


export default function NavCard() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Card
            sx={{
                width: "60%",
                borderRadius: "15px",
                textAlign: "left",
            }}
        >
            <CardContent>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} 
            onChange={handleChange} 
            textColor="secondary"
            indicatorColor="secondary"
            style={{
                width: "100%",
            }}
            sx = {{
                width: "100%",
                "& .MuiTabs-indicator": {
                  background: "linear-gradient(90deg, #615DFA 0%, #23D2E2 100%)",
                },
                "& .MuiTab-root": {
                    fontWeight: "bold",
                  },
            }}>
                <Tab label="For you"   style={{width: "50%"}}/>
                <Tab label="Following"  style = {{ width: "50%"}}/>
            </Tabs>
            </Box>
            </CardContent>
        </Card>
    )
}
