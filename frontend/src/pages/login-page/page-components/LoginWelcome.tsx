/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import Logo from "../../../assets/icons/logo.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function LoginWelcome() {
  const navigate = useNavigate();
  const [choiceMode, setChoiceMode] = useState(1);
  useEffect(() => {
    if (choiceMode == 2) {
      navigate("/signup");
    }
  }, [choiceMode]);
  return (
    <div className="login-welcome-container">
      <img src={Logo} alt="logo" className="login-logo" />
      <span className="login-welcome-text">Welcome to</span>
      <span className="app-name-text">ABCDEF</span>
      <div className="app-description-text">
        A social media for{" "}
        <span style={{ fontWeight: "800", fontSize: "18px" }}>
          movie enthusiasts
        </span>{" "}
        to find movies, watch together with friends and share cinematic
        experiences.
      </div>
      <div className="authentication-button-container">
        <button
          className={`authentication-login-button ${choiceMode == 1 && "authentication-choice-button"
            }`}
          onClick={() => setChoiceMode(1)}
        >
          Login
        </button>
        <button
          className={`authentication-register-button ${choiceMode == 2 && "authentication-choice-button"
            }`}
          onClick={() => setChoiceMode(2)}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginWelcome;
