import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import PostUploadComponent from './page-components/post-upload-component';
import PostComponent from './page-components/post-components';
import CalendarCard from './page-components/calendar-card';
import WatchTogetherCard from './page-components/watch-together-card';
import MoviePlanCard from './page-components/movie-plan-card';
import NavCard from './page-components/nav-card';
import NewsFeedIntroCard from './page-components/news-feed-intro-card';


export default function NewFeed() {
    return (
        <Box>
            <Header />

            <Box sx={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box alignContent="start">

                </Box>
                    <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "3%",
                        }}>
                        <Box sx={{width: "85%", marginLeft: "14%"}}>
                        <NewsFeedIntroCard />
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
                                    <NavCard />
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
                                    <PostUploadComponent />
                                </Box>
                                <Box sx={{
                                    width: "100%",
                                    marginBottom: "3%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <PostComponent id={0} />
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Box sx={{marginTop: "3%", marginBottom: "3%"}}>
                                    <WatchTogetherCard />
                                </Box>

                                <Box sx={{marginTop: "3%", marginBottom: "3%"}}>
                                    <MoviePlanCard />
                                </Box>

                                <Box sx={{marginTop: "3%", marginBottom: "3%"}}>
                                    <CalendarCard />
                                </Box>
                            </Box>
                            
                        </Box>
                    </Box>
                <Box>

                </Box>
            </Box>

        </Box>
    );
}