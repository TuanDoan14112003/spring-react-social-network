import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIcon } from "@mui/material";
import axios from "axios";


export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false);

    const FacebookSignup = async () => {

    }

    const TwitterSignup = async () => { }

    const GoogleSignup = async () => { }

    const Signup = async () => { }


    const FormValidation = () => {
        if (username.length > 0) {
            setIsUsernameValid(true);
        } else {
            setIsUsernameValid(false);
        }

        if (password.length > 0) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }

        if (repeatPassword.length > 0) {
            setIsRepeatPasswordValid(true);
        } else {
            setIsRepeatPasswordValid(false);
        }
    }

    return (
        <Card style={{ borderRadius: 50, width: "35%", }}>
            <CardContent style={{ marginLeft: "10%", marginRight: "10%", marginTop: "9%" }}>
                <Typography variant="h6"
                    sx={{
                        textAlign: "center",
                        color: "#302F45",
                        fontFamily: "Rajdhani",
                        fontSize: "29px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "7%",
                    }}
                    gutterBottom >
                    Sign Up
                </Typography>
                <TextField
                    id="outlined-required"
                    label="Username or email"
                    placeholder="Username or email"
                    variant="outlined"
                    fullWidth
                    sx={{
                        my: 2, '& label.Mui-focused': {
                            color: "#AFB0C0", // Change the label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '', // Change the border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#AFB0C0', // Change the border color when focused
                            },
                        },
                    }}
                    InputProps={{ sx: { borderRadius: 3, fontFamily: "Rajdhani" } }}
                    InputLabelProps={{ style: { fontFamily: "Rajdhani", fontWeight: 700 } }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={isUsernameValid}
                // helperText="Incorrect entry."
                />
                <TextField
                    id="outlined-required"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 3 }, style: { fontFamily: "Rajdhani" } }}
                    InputLabelProps={{ style: { fontFamily: "Rajdhani", fontWeight: 700 } }}
                    sx={{
                        my: 2, '& label.Mui-focused': {
                            color: "#AFB0C0", // Change the label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '', // Change the border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#AFB0C0', // Change the border color when focused
                            },
                        },
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={isPasswordValid}
                // helperText="Incorrect entry." 
                />
                <TextField
                    id="outlined-required"
                    label="Repeat Password"
                    placeholder="Repeat Password"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 3 }, style: { fontFamily: "Rajdhani", } }}
                    InputLabelProps={{ style: { fontFamily: "Rajdhani", fontWeight: 700 } }}
                    sx={{
                        my: 2, '& label.Mui-focused': {
                            color: "#AFB0C0", // Change the label color when focused
                        },
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                                borderColor: '', // Change the border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#AFB0C0', // Change the border color when focused
                            },
                        },
                    }}
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    error={isRepeatPasswordValid}
                // helperText="Incorrect entry." 
                />

                <Button variant="contained" sx={{
                    width: "100%", height: "54px", borderRadius: 3, backgroundColor: "#615DFA", my: 2, "&:hover": {
                        backgroundColor: "#303276",
                    }
                }} onClick={Signup}>
                    <Typography sx={{
                        color: '#FFF',
                        fontFamily: 'Rajdhani',
                        fontSize: '15.885px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        textTransform: 'none',
                    }}>
                        Register Now!
                    </Typography>
                </Button>
                <Typography variant="caption" sx={{ textAlign: "start", color: "#3E3F5E", fontWeight: 500, fontFamily: "Rajdhani" }} color="text.secondary" gutterBottom >
                    You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="/" style={{ color: "#00C7D9" }}>contact us</a>!
                </Typography>

                <Box>
                    <Divider sx={{ my: 2 }}>
                        <Typography sx={{
                            color: '#3E3F5E',
                            textAlign: 'center',
                            fontFamily: 'Rajdhani',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                        }}>
                            Sign up with your Social Account
                        </Typography>
                    </Divider>
                </Box>

                <Box>
                    <IconButton onClick={FacebookSignup} sx={{ backgroundColor: "#3763D2", margin: 2, borderRadius: 2 }} >
                        <FacebookIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <IconButton onClick={TwitterSignup} sx={{ backgroundColor: "#1ABCFF", margin: 2, borderRadius: 2 }}>
                        <TwitterIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                    <IconButton onClick={TwitterSignup} sx={{ backgroundColor: "#7B5DFA", margin: 2, borderRadius: 2 }}>
                        <SvgIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="1024" height="1024" rx="15%" fill="#7B5DFA" /><path d="m115 101-22 56v228h78v42h44l41-42h63l85-85v-199zm260 185-48 48h-78l-42 42v-42h-65v-204h233zm-48-100v85h-30v-85zm-78 0v85h-29v-85z" fill="#fff" /></svg>
                        </SvgIcon>
                    </IconButton>
                    <IconButton onClick={GoogleSignup} sx={{ backgroundColor: "#FD434F", margin: 2, borderRadius: 2 }}>
                        <YouTubeIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                </Box>
            </CardContent>
        </Card >
    );
}