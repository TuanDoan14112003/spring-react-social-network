/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function Welcome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [choiceMode, setChoiceMode] = useState(location.pathname == "/login" ? 1 : 2);
  
  return (
    <div
      className="login-welcome-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30vw",
        height: "60vh",
        color: "#fff",
      }}>
      <img src={Logo} alt="logo" style={{
        width: "80px"
      }} />
      <span style={{
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
      }}>Welcome to</span>
      <span
        style={{
          fontFamily: "Baloo",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        }}>ABCDEF</span>
      <div style={{
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        width: "80%",
        padding: "10px",
        textAlign: "center",
        marginBottom: "20px",
      }}>
        A social media for{" "}
        <span style={{ fontWeight: "800", fontSize: "18px" }}>
          movie enthusiasts
        </span>{" "}
        to find movies, watch together with friends and share cinematic
        experiences.
      </div>
      <div className="authentication-button-container">
        <Button
          sx={{
            width: '10vw',
            height: '50px',
            backgroundColor: choiceMode == 1 ? "#615dfa !important": "transparent",

            border: '1px solid #fff',
            borderRight: 'none',
            color: '#fff',
            borderRadius: '10px 0px 0px 10px',
            transitionProperty: 'background-color',
            transitionDuration: '500ms',
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#5d5cb5",
            }
          }}
          onClick={() => {
            setChoiceMode(1);
            navigate("/login");
          }}
        >
          <Typography sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            textTransform: 'none',
          }}>
            Login
          </Typography>
        </Button>
        <Button
          
          sx={{
            width: '10vw',
            height: '50px',
            backgroundColor: choiceMode == 2 ? "#615dfa !important": "transparent",
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 'normal',
            border: '1px solid #fff',
            borderLeft: 'none',
            borderRadius: '0 10px 10px 0',
            transitionProperty: 'background-color',
            transitionDuration: '500ms',
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#5d5cb5",
            }
          }}
          onClick={() => {
            setChoiceMode(2)
            navigate("/signup");
          }}
        >
          <Typography sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            textTransform: 'none',
          }}>
            Register
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
