import { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import GoogleIcon from "../../../assets/icons/google.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import { Button, Typography } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setEmailChange = (emailValue: string) => {
    setEmail(emailValue);
  };

  const setPasswordChange = (passwordValue: string) => {
    setPassword(passwordValue);
  };
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "72px",
      width: "30vw",
      height: "80vh",
      boxShadow: "10px 10px 60px 0px rgba(0, 0, 0, 0.43)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "3%",
      paddingRight: "3%",
      marginRight: "2%",
    }}>
      <div style={{
        marginTop: "10%",
        marginBottom: "10%"
      }}>
        <h1 style={{
          color: "#302f45",
          fontSize: "29px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}> Account Login</h1>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}>
        <TextField
          id="outlined-required"
          label="Username or email"
          placeholder="Username or email"
          variant="outlined"
          fullWidth
          sx={{
            my: 2, '& label.Mui-focused': {
              color: "#AFB0C0", // Change the label color when focused
            },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '', // Change the border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#AFB0C0', // Change the border color when focused
              },
            },
          }}
          InputProps={{ sx: { borderRadius: 3, fontFamily: "Rajdhani" } }}
          InputLabelProps={{ style: { fontFamily: "Rajdhani", fontWeight: 700 } }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        // error={isUsernameValid}
        // helperText="Incorrect entry."
        />
        <TextField
          id="outlined-required"
          label="Password"
          placeholder="Password"
          variant="outlined"
          fullWidth
          InputProps={{ sx: { borderRadius: 3 }, style: { fontFamily: "Rajdhani" } }}
          InputLabelProps={{ style: { fontFamily: "Rajdhani", fontWeight: 700 } }}
          sx={{
            my: 2, '& label.Mui-focused': {
              color: "#AFB0C0", // Change the label color when focused
            },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '', // Change the border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#AFB0C0', // Change the border color when focused
              },
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        // helperText="Incorrect entry." 
        />
      </div>
      <span style={{

      }}></span>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8%",

        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Checkbox
            sx={{ marginLeft: "-8%" }}
            //   checked={checked}
            //   onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span
            style={{
              color: "#302f45",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}>
            Remember Me
          </span>
        </div>
        <span
          style={{
            color: "#afb0c0",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          }}>
          Forgot Password?</span>
      </div>
      <Button variant="contained" sx={{
        width: "100%", height: "54px", borderRadius: 3, backgroundColor: "#615DFA", my: 2, "&:hover": {
          backgroundColor: "#303276",
        }
      }} onClick={() => { }}>
        <Typography sx={{
          color: '#FFF',
          fontFamily: 'Rajdhani',
          fontSize: '15.885px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'none',
        }}>
          Login to your account!
        </Typography>
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            color: "#3e3f5e",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            marginBottom: "10%",
          }}>
          Login with your Social Account
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}>
          <img
            src={FacebookIcon}
            style={{
              cursor: "pointer",
            }}
            alt="facebook-icon"
          />
          <img
            src={GoogleIcon}
            style={{
              cursor: "pointer",
            }}
            alt="google-icon"
          />
          <img
            src={TwitterIcon}
            style={{
              cursor: "pointer",
            }}
            alt="twitter-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
