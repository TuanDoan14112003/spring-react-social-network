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
import AvatarButton from '../../../components/avatar-button/avatar-button';
import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg';
import { ReactComponent as GifIcon } from '../../../assets/icons/gif.svg';

import { ReactComponent as SmillingEmoji } from '../../../assets/icons/smilling-emoji-icon.svg';
import { ReactComponent as ImageIcon } from '../../../assets/icons/photo-icon.svg';



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
                                padding: "0.2rem",
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
                                <SvgIcon component={ImageIcon} viewBox="0 0 29 29" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <IconButton aria-label="Gif">
                                <SvgIcon component={SmillingEmoji} viewBox="0 0 40 40" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>

            </CardActions>
        </Card>
    );
}