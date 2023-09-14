import React, { useState, useEffect } from "react";
import { Card, Divider } from "@mui/material";
import { Grid } from "@mui/material";


export default function ReactionReceivedCard() {
    return (
        <Card
            sx={{
                width: "60%",
                borderRadius: "15px",
                textAlign: "left",
            }}
        >
            <Grid container spacing={0}>
                <Grid item xs={6}>

                </Grid>
                <Divider />
                <Grid item xs={6}>

                </Grid>

                <Grid item xs={6}>

                </Grid>
                <Divider />
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </Card>
    );
}