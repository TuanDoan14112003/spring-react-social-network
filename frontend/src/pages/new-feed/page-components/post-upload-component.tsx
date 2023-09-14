import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab/Tab';
import TextField from '@mui/material/TextField/TextField';
import Divider from '@mui/material/Divider/Divider';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import IconButton from '@mui/material/IconButton/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactComponent as StatusIcon } from '../../../assets/icons/status.svg';
import { ReactComponent as BlogIcon } from '../../../assets/icons/blog.svg';
import { ReactComponent as PollIcon } from '../../../assets/icons/poll.svg';
import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg';
import { ReactComponent as GifIcon } from '../../../assets/icons/gif.svg';
import { ReactComponent as TagIcon } from '../../../assets/icons/tag.svg';

export default function PostUploadComponent() {

    return (
        <Card sx={{ width: "60%", borderRadius: "15px", }}>
            <Tabs
                value={0}
                indicatorColor="primary"
                variant='fullWidth'
                textColor="primary"
            >
                <Tab label="Status" icon={<SvgIcon component={StatusIcon} />} iconPosition="start" />
                <Divider
                    orientation="vertical"
                    style={{ height: 30, alignSelf: "center" }}
                />
                <Tab label="Blog Post" icon={<SvgIcon component={BlogIcon} />} iconPosition="start" />
                <Divider
                    orientation="vertical"
                    style={{ height: 30, alignSelf: "center" }}
                />
                <Tab label="Poll" icon={<SvgIcon component={PollIcon} />} iconPosition="start" />
            </Tabs>

            <TextField
                variant="standard"
                fullWidth
                multiline
                rows={5}
                InputProps={{
                    disableUnderline: true, // Remove the input underline
                    onFocus: (e) => e.target.blur(), // Prevent the input from being focused
                }}
            />
            <Divider />
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

                    <Grid container spacing={0} width="25%">
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
                            <Button variant="contained" color="primary"size='large' sx={{ borderRadius: "8px" }}>
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

                    </Grid>
                </Box>

            </CardActions>
        </Card>
    );
}