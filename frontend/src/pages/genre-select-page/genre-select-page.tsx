import React, { useState, useEffect } from "react";
import background from "../../assets/images/background.png";
import actionGenre from "../../assets/images/actionGenre.png";
import horrorGenre from "../../assets/images/horrorGenre.png";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import Grid from "@mui/material/Grid/Grid";
import GenreButton from "./page-components/genre-button";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const genresList = [
    {
        title: "Action",
        image: actionGenre.toString()
    },
    {
        title: "Horror",
        image: horrorGenre.toString()

    },
    {
        title: "Romance",
        image: ""
    },
    {
        title: "Comedy",
        image: ""
    },
    {
        title: "Drama",
        image: ""
    },
    {
        title: "Fantasy",
        image: ""
    },
    {
        title: "Thriller",
        image: ""
    },
    {
        title: "Biography",
        image: ""
    }

]

export default function GenrePage() {

    const [genres, setGenres] = useState([]);

    const handleOnClick = () => {

    }

    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "100vw",
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                width: "73vw",
                height: "92vh",
                flexShrink: 0,
                background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.20) 0%, rgba(217, 217, 217, 0.20) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: 24
            }}>
                <Box sx={{ margin: "3%" }}>
                    <Typography style={{
                        color: '#FFF',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        fontFamily: 'Rajdhani',
                        fontSize: '4.375rem',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        width: "100%",
                    }}>
                        What Kind Of Movies Do You Like?
                    </Typography>
                    <Typography style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Rajdhani',
                        fontSize: '1.75rem',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '140%',
                        marginBottom: "3%"
                    }}>
                        Select at least three (03) genres to continue
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            genresList.map((genre, index) =>
                                <Grid item xs={3} key={index}>
                                    <GenreButton text={genre.title} eventHandler={handleOnClick} image={genre.image} />
                                </Grid>)
                        }

                    </Grid>
                    <svg xmlns="http://www.w3.org/2000/svg" width="174" height="9" viewBox="0 0 174 9" fill="none" style={{ marginTop: "3%" }}>
                        <path d="M4 4H104" stroke="white" stroke-width="7" stroke-linecap="round" />
                        <circle cx="127.5" cy="4.5" r="4.5" fill="white" />
                        <circle cx="148.5" cy="4.5" r="4.5" fill="white" />
                        <circle cx="169.5" cy="4.5" r="4.5" fill="white" />
                    </svg>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button variant="contained" sx={{
                            marginLeft: "5%", width: "11.9375rem", height: "3.375rem", borderRadius: 3, backgroundColor: "#615DFA", my: 2, "&:hover": {
                                backgroundColor: "#303276",
                            }
                        }} onClick={() => { }} startIcon={<NavigateBeforeIcon />}>
                            <Typography sx={{
                                marginRight: "7%",
                                color: '#FFF',
                                fontFamily: 'Rajdhani',
                                fontSize: '15.885px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                textTransform: 'none',
                            }}>
                                Back
                            </Typography>
                        </Button>

                        <Button variant="contained" sx={{
                            marginRight: "5%", width: "11.9375rem", height: "3.375rem", borderRadius: 3, backgroundColor: "#615DFA", my: 2, "&:hover": {
                                backgroundColor: "#303276",
                            }
                        }} onClick={() => { }} endIcon={< NavigateNextIcon />}>
                            <Typography sx={{
                                marginLeft: "7%",
                                color: '#FFF',
                                fontFamily: 'Rajdhani',
                                fontSize: '15.885px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                textTransform: 'none',
                            }}>
                                Next
                            </Typography>
                        </Button>
                    </Box>

                </Box>
            </Box>

        </div >
    )
}