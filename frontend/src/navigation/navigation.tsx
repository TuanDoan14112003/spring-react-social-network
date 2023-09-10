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

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
      </Routes>
    </Router>
  );
}
