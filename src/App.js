import { useState, useContext } from "react";
import "./App.css";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";


function App() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div className="bg-slate-200">
      <div className="w-[50%] mx-auto ">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {isLoggedIn && <Route path="/" element={<Home />} />}
          {!isLoggedIn && <Route path="/" element={<LoginPage />} />}
          {isLoggedIn && <Route path="/profile" element={<Profile />} />}
          {!isLoggedIn && <Route path="/profile" element={<LoginPage />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
