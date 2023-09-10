import { useState } from 'react';
import './App.css';
import Navigation from './navigation/navigation';
import CreateProfileForm from './pages/create-profile/page-components/CreateProfileForm';
import CreateProfilePage from './pages/create-profile/create-profile';
import LoginPage from './pages/login-page/login-page';

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Navigation />

    </div>
  );
}

export default App;
