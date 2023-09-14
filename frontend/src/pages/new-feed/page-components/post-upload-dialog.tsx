import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField/TextField';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import IconButton from '@mui/material/IconButton/IconButton';
import AvatarButton from '../../../components/avatar-button/avatar-button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ReactComponent as SmillingEmoji } from '../../../assets/icons/smilling-emoji-icon.svg';
import { ReactComponent as ImageIcon } from '../../../assets/icons/photo-icon.svg';



interface PostUploadDialogProps {
    onClose: (value: boolean) => void;
    open: boolean;

}
export default function PostUploadDialog(props: PostUploadDialogProps) {
    const { onClose, open } = props;
    const [text, setText] = useState("");

    return (
        <Dialog
            fullWidth={true}
            onClose={onClose}
            open={open}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <DialogTitle>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",

                }}>

                    <AvatarButton avatar={undefined} onClick={() => { console.log("") }} />
                    <Typography variant="h6" sx={{ fontWeight: "700", marginLeft: "1rem" }}>
                        Username
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box margin="1rem">
                    <TextField
                        variant="standard"
                        placeholder="How's your latest movie experience?"
                        multiline
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
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <IconButton>
                    <SvgIcon component={ImageIcon} viewBox="0 0 29 29" sx={{ color: "#AFB0C0" }} />
                </IconButton>
                <IconButton>
                    <SvgIcon component={SmillingEmoji} viewBox="0 0 40 40" sx={{ color: "#AFB0C0" }} />
                </IconButton>
                <Button variant="contained" color="inherit" sx={{ borderRadius: "8px" }} onClick={() => { onClose(false); }}>
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
                <Button variant="contained" color="primary" sx={{ borderRadius: "8px" }}>
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
            </DialogActions>

        </Dialog>
    );
}