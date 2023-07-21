import React from "react";
import { Card, CardActionArea, Typography } from "@mui/material";

interface ImageButtonProps {
    eventHandler: () => void;
    image: string;
    text: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({
    eventHandler,
    image,
    text
}) => {
    const buttonStyle = {
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '20.75rem',
        height: '13rem',
        borderRadius: '1.5rem',
    };
    return (
        <Card style={buttonStyle} onClick={eventHandler}>
            <CardActionArea sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Rajdhani',
                    fontSize: '1.25rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '130%',
                }}>
                    {text}
                </Typography>
            </CardActionArea>
        </Card >

    )

}

export default ImageButton;