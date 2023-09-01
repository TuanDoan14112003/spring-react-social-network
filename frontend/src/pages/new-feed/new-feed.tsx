import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import PostUploadComponent from './page-components/post-upload-component';
import PostComponent from './page-components/post-components';


export default function NewFeed() {
    return (
        <Box>
            <Header />

            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box alignContent="start">

                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Box>

                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}>
                        <Box sx={{
                            width: "100%",
                            marginTop: "3%",
                            marginBottom: "3%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <PostUploadComponent />
                        </Box>
                        <Box sx={{
                            width: "100%",
                            marginTop: "3%",
                            marginBottom: "3%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <PostComponent />
                        </Box>
                    </Box>
                    <Box>

                    </Box>

                </Box>
                <Box>

                </Box>
            </Box>

        </Box>
    );
}