import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider/Divider';
import Grid from '@mui/material/Grid/Grid';
import Typography from '@mui/material/Typography/Typography';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import { ReactComponent as LikeIcon } from '../../../assets/icons/like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/comment.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';
import { ReactComponent as MoreIcon } from '../../../assets/icons/more.svg';


interface Post {
    id: number;


}
export default function PostComponent(props: Post) {
    return (
        <Card sx={{ width: "60%", borderRadius: "15px", textAlign: "left" }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <SvgIcon component={MoreIcon} viewBox="0 0 23 7" />
                    </IconButton>
                }
                titleTypographyProps={{ fontWeight: 'bold' }}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />

            <CardContent>
                <p>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </p>
            </CardContent>
            <CardMedia
                component="img"
                height="194"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={1.8}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ borderRadius: "30px" }}
                            size='small'
                            sx={{
                                ".MuiButton-contained": {
                                    "textTransform": "none",
                                }
                            }}
                        >
                            Primary
                        </Button>

                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="primary" style={{ borderRadius: "30px" }} size='small'>
                            Primary
                        </Button>
                    </Grid>

                </Grid>
            </CardContent>

            <Divider style={{ marginRight: "2rem", marginLeft: "2rem" }} />

            <CardContent style={{ marginTop: "5px", marginBottom: "5px" }}>
                <Grid container spacing={0}>
                    <Grid item xs={1.8}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </CardContent>

            <Divider />
            <CardActions disableSpacing >
                <Grid container spacing={2}>
                    <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <IconButton aria-label="like">
                            <SvgIcon component={LikeIcon} viewBox="0 0 24 24" />
                        </IconButton>
                        <Typography variant="body2" color="#AFB0C0">
                            React!
                        </Typography>

                    </Grid>
                    <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <IconButton aria-label="comment">
                            <SvgIcon component={CommentIcon} viewBox="0 0 24 24" />
                        </IconButton>
                        <Typography variant="body2" color="#AFB0C0">
                            Comment
                        </Typography>
                    </Grid>
                    <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <IconButton aria-label="share">
                            <SvgIcon component={ShareIcon} viewBox="0 0 24 24" />
                        </IconButton>
                        <Typography variant="body2" color="#AFB0C0">
                            Share
                        </Typography>
                    </Grid>
                </Grid>


            </CardActions>
        </Card >
    );
}