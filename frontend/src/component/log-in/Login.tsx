import { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import GoogleIcon from "../../assets/icons/google.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import "./styles.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setEmailChange = (emailValue: string) => {
    setEmail(emailValue);
  };

  const setPasswordChange = (passwordValue: string) => {
    setPassword(passwordValue);
  };
  return (
    <div className="account-login-container">
      <div className="account-login-header">
        <h1 className="account-login-text">Account Login</h1>
      </div>

      <div className="login-information-container">
        <TextField
          sx={{ marginBottom: "30px" }}
          label="Email"
          defaultValue="Email"
          value={email}
          onChange={(event) => setEmailChange(event.target.value)}
        />
        <TextField
          sx={{ marginBottom: "20px" }}
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPasswordChange(event.target.value)}
        />
      </div>
      <span className="error"></span>
      <div className="login-funtion">
        <div className="remember-check-box-container">
          <Checkbox
            sx={{ marginLeft: "-12px" }}
            //   checked={checked}
            //   onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span className="remember-me-check-box-description">Remember Me</span>
        </div>
        <span className="forgot-password">Forgot Password?</span>
      </div>
      <button className="log-in-button">Login to your Account!</button>
      <div className="login-method-container">
        <span className="log-in-medthod-description">
          Login with your Social Account
        </span>
        <div className="method-list-container">
          <img
            src={FacebookIcon}
            className={"facebook-method-icon"}
            alt="facebook-icon"
          />
          <img
            src={GoogleIcon}
            className={"google-method-icon"}
            alt="google-icon"
          />
          <img
            src={TwitterIcon}
            className={"twitter-method-icon"}
            alt="twitter-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
