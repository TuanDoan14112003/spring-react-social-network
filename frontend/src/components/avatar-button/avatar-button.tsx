import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton/IconButton';
import SvgIcon from '@mui/material/SvgIcon/SvgIcon';
import { ReactComponent as AvatarBorder } from '../../assets/icons/avatar-border.svg';
import defaultAvatar from '../../assets/images/default-avatar.jpg';

interface AvatarButtonProps {
    avatar: string | undefined;
    onClick: () => void;
}

export default function AvatarButton(props: AvatarButtonProps) {
    const { avatar, onClick } = props;

    return (
        <IconButton onClick={onClick} sx={{
            // width: "100%",
            // height: "100%",
            padding: "0",
            backgroundColor: "#fff",
            '&:hover': {
                backgroundColor: "#fff",
            }
        }}>
            <SvgIcon
                component={AvatarBorder}
                viewBox="0 0 80 89"
            >
                <img src={avatar? avatar: defaultAvatar} alt="avatar" 
                style={{ 
                    borderRadius: '50%', 
                    width: '100%', 
                    height: '100%',
                    backgroundColor: "#615DFA", 
                    }} />
            </SvgIcon>
        </IconButton>
    )
}