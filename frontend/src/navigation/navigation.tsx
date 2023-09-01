import React from "react";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/login-page/login-page";
import SingupPage from "../pages/signup-page/signup-page";
import CreateProfilePage from "../pages/create-profile/create-profile";
import NewFeed from "../pages/new-feed/new-feed";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/new-feed" element={<NewFeed />} />
      </Routes>
    </Router>
  );
}
