import { useState } from 'react';
import './App.css';
import Navigation from './navigation/navigation';
import CreateProfileForm from './pages/create-profile/page-components/CreateProfileForm';
import CreateProfilePage from './pages/create-profile/create-profile';
import LoginPage from './pages/login-page/login-page';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#615DFA',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: "Rajdhani",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', height: '100%' }}>
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
