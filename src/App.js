import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="bg-slate-200">
      <div className="w-[50%] mx-auto ">
        {loading ? (
          <Loading />
        ) : !isLoggedIn ? (
          <div>
            <LoginPage />
            {/* <SignUpPage /> */}
          </div>
        ) : (
          <div>
            {/* <Home /> */}
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
