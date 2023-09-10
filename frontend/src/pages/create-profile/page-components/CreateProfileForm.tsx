import { useState, ChangeEvent } from 'react';
import ModeIcon from '@mui/icons-material/Mode';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab/Fab';
import CommonUtils from '../CommonUtils';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../../../assets/icons/logo.svg';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, Icon } from '@mui/material';
import Button from '@mui/material/Button/Button';
import './style.css';
import ChoiceDialog from '../../../components/dialog/ChoiceDialog';
import ClickoutListener from '../../../components/click-out-listener/ClickoutListener';

function CreateProfileForm() {
  const title = 'Gender';
  const options = ['Male', 'Female', 'Non-Binary', 'Prefer not to say'];
  const [formAvatar, setAvatar] = useState(Logo);
  const [genderValue, changeGenderValue] = useState('');
  const [genderPopUp, setGenderPopUp] = useState(false);
  const handleOnChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const data = event.target.files[0];
    if (data) {
      const base64 = CommonUtils.getBase64(data);
      setAvatar(base64);
    }
  };

  return (
    <div className="create-profile-container">
      {genderPopUp && (
        <ChoiceDialog
          title={title}
          options={options}
          isComfirmButton={false}
          closePopUp={() => setGenderPopUp(false)}
          onValueChange={(value: string) => changeGenderValue(value)}
        />
      )}
      {genderPopUp && (
        <ClickoutListener onClick={() => setGenderPopUp(false)} />
      )}
      <h1 className="create-profile-header-text"> Create Your Profile</h1>
      <label htmlFor="upload-photo">
        <input
          style={{ display: 'none' }}
          type="file"
          id="upload-photo"
          name="upload-photo"
          onChange={(event) => handleOnChangeAvatar(event)}
        />
        <Fab
          component="span"
          aria-label="add"
          size="small"
          sx={{
            backgroundColor: '#615dfa',
            position: 'absolute',
            marginTop: '90px',
            marginLeft: '20px',
            zIndex: '2',
          }}
        >
          <CreateIcon />
        </Fab>
      </label>

      {/* <img src={Logo} alt="logo" className="form-logo" /> */}
      <Avatar
        alt="logo"
        src={formAvatar}
        className="form-logo"
        sx={{ width: 120, height: 120 }}
      />
      <img src={Logo} alt="logo" className="left-logo" />
      <div className="create-profile-header"></div>
      <div className="logo"></div>
      <div className="create-profile-information-container">
        <TextField
          className="profile-name"
          sx={{
            borderRadius: '120px',
            marginBottom: '40px',

            '& label.Mui-focused': {
              color: '#AFB0C0',
              // Change the label color when focused
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
          label="Profile Name"
          placeholder="Your Full Name"
        />
        <TextField
          sx={{
            marginBottom: '40px',
            '& label.Mui-focused': {
              color: '#AFB0C0', // Change the label color when focused
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
          label="Username"
          placeholder="Your Username"
        />
        <TextField
          sx={{
            marginBottom: '40px',
            '& label.Mui-focused': {
              color: '#AFB0C0', // Change the label color when focused
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
          label="Gender"
          placeholder="Your Gender"
          onClick={() => setGenderPopUp(true)}
          value={genderValue}
        />
        <TextField
          sx={{
            marginBottom: '20px',
            '& label.Mui-focused': {
              color: '#AFB0C0',
              // Change the label color when focused
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
          label="DOB"
        />
      </div>
      <div className="create-profile-function">
        <div className="back-button-container">
          {/* <button className="back-button">Back</button> */}
          <Button
            sx={{ backgroundColor: '#615dfa' }}
            className="back-button"
            startIcon={<ArrowBackIosIcon />}
            variant="contained"
          >
            Back
          </Button>
        </div>

        <div className="next-button-container">
          {/* <button className="next-button">Next</button> */}
          <Button
            sx={{ backgroundColor: '#615dfa' }}
            className="next-button"
            endIcon={<ArrowForwardIosIcon />}
            variant="contained"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateProfileForm;
