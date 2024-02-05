import { useState, useContext } from "react";
import "./App.css";
import Loading from "./components/Loading";
import EditProfilePage from "./pages/EditProfilePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import LoginForm from "./components/LoginForm";

function App() {
  const { isLoggedIn } = useContext(AppContext);

  const active = window.localStorage.getItem("isActive");

  return (
    <div className="bg-slate-200">
      <div className="w-[50%] mx-auto ">
        <Routes>
          <Route
            path="/"
            element={active == "true" ? <Home /> : <LoginPage />}
          />
          {/* <Route path="/login" element={active=="true"?<LoginPage />} /> */}
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={active && <Profile />} />
          <Route path="/editprofile" element={<EditProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
