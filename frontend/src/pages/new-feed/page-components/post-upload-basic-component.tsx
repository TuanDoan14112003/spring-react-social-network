import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField/TextField';
import CardContent from '@mui/material/CardContent';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import IconButton from '@mui/material/IconButton/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AvatarButton from '../../../components/avatar-button/avatar-button';
import { ReactComponent as StatusIcon } from '../../../assets/icons/status.svg';
import { ReactComponent as BlogIcon } from '../../../assets/icons/blog.svg';
import { ReactComponent as PollIcon } from '../../../assets/icons/poll.svg';
import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg';
import { ReactComponent as GifIcon } from '../../../assets/icons/gif.svg';
import { ReactComponent as TagIcon } from '../../../assets/icons/tag.svg';



interface PostUploadBasicComponentProps {
    onClose: (value: boolean) => void;
    open: boolean;
}

export default function PostUploadBasicComponent(props: PostUploadBasicComponentProps) {
    const { onClose, open } = props;
    return (
        <Card sx={{ width: "60%", borderRadius: "15px", }}>
            <CardContent>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                
                }}>
                    <AvatarButton avatar={undefined} onClick={() => { console.log("") }} />
                    <Box sx={{
                        marginLeft: "1rem",
                        width: "100%",
                    }}>
                        <TextField
                            variant="standard"
                            placeholder="How's your latest movie experience?"
                            fullWidth
                            rows={5}
                            InputProps={{
                                disableUnderline: true, // Remove the input underline
                                onFocus: (e) => e.target.blur(), // Prevent the input from being focused
                            }}
                            sx={{
                                padding: "0.5rem",
                                paddingLeft: "1rem",
                                backgroundColor: "#F5F5F5",
                                borderRadius: "15px",
                            }}
                            onClick={() => {
                                if (open) {
                                    onClose(false);
                                } else {
                                    onClose(true);
                                }
                            }}
                        />

                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Grid container spacing={0} width="25%">
                        <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <IconButton aria-label="camera">
                                <SvgIcon component={CameraIcon} viewBox="0 0 24 24" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <IconButton aria-label="Gif">
                                <SvgIcon component={GifIcon} viewBox="0 0 24 24" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <IconButton aria-label="Tag">
                                <SvgIcon component={TagIcon} viewBox="0 0 24 24" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* <Grid container spacing={0} width="25%">
                        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant="text" color="inherit" >
                                <Typography sx={{
                                    color: '#AFB0C0',
                                    fontFamily: 'Rajdhani',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    textTransform: 'none',
                                }}>
                                    Discard
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant="contained" color="primary" size='large' sx={{ borderRadius: "8px" }}>
                                <Typography sx={{
                                    color: '#FFF',
                                    fontFamily: 'Rajdhani',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                    textTransform: 'none',
                                }}>
                                    Post
                                </Typography>
                            </Button>
                        </Grid>

                    </Grid> */}
                </Box>

            </CardActions>
        </Card>
    );
}