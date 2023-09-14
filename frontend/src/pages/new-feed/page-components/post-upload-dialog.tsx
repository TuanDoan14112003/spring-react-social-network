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


interface PostUploadDialogProps {
    onClose: (value: boolean) => void;
    open: boolean;

}
export default function PostUploadDialog(props: PostUploadDialogProps) {
    const { onClose, open } = props;
    const [text, setText] = useState("");

    return (
        <Dialog
            fullWidth
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    width: "50rem",
                    maxWidth: "1000rem!important",
                },
            }}
            
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "500px",  // Set your width here
                    },
                },
            }}>
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
                <Button onClick={() => { onClose(false) }}>Cancel</Button>
                <Button onClick={() => { onClose(false) }}>Post</Button>
            </DialogActions>

        </Dialog>
    );
}