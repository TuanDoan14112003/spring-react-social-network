import React, { useState } from "react";
import { Card, CardActionArea, Typography } from "@mui/material";


interface GenreButtonProps {
    eventHandler: () => void;
    image: string;
    text: string;
}



const GenreButton: React.FC<GenreButtonProps> = ({
    eventHandler,
    image,
    text
}) => {
    const buttonStyle = {
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        width: "100%",
        height: '23vh',

        borderRadius: '1.5rem',
    };

    const [isClicked, setIsClicked] = useState(false);



    return (
        <Card style={buttonStyle} onClick={() => {
            eventHandler(),
                setIsClicked(!isClicked);
        }}>

            <CardActionArea sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
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
                {isClicked ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "2%" }}>

                        <path d="M17.2927 5.4968C16.8395 4.42487 16.1907 3.46243 15.364 2.63599C14.5373 1.80926 13.5748 1.16045 12.5032 0.707338C11.3937 0.237624 10.2152 0 9 0C7.7848 0 6.60629 0.237624 5.4968 0.707338C4.42487 1.16045 3.46243 1.80926 2.63599 2.63599C1.80955 3.46273 1.16045 4.42516 0.707338 5.4968C0.237624 6.60629 0 7.7848 0 9C0 10.2152 0.237624 11.3937 0.707338 12.5032C1.16045 13.5751 1.80926 14.5376 2.63599 15.364C3.46273 16.1907 4.42516 16.8395 5.4968 17.2927C6.60629 17.7624 7.7848 18 9 18C10.2152 18 11.3937 17.7624 12.5032 17.2927C13.5751 16.8395 14.5376 16.1907 15.364 15.364C16.1907 14.5373 16.8395 13.5748 17.2927 12.5032C17.7624 11.3937 18 10.2152 18 9C18 7.7848 17.7624 6.60629 17.2927 5.4968ZM7.85673 14.5128L5.46593 12.4607L3.16337 10.4846L5.20938 8.10076L7.32557 9.91701L12.2999 3.48719L14.8358 5.341L7.85673 14.5128Z" fill="#615DFA" />
                    </svg> : null
                }
            </CardActionArea>
        </Card >

    )

}

export default GenreButton;