import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function LoginForm() {
  const { loginSubmitHandler, loginFormData, setloginFormData, userId } =
    useContext(AppContext);

  const navigate = useNavigate();
  // const [loginFormData, setloginFormData] = useState({
  //   username: "",
  //   password: "",
  // });


  function changeHandler(event) {
    setloginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // async function loginSubmitHandler(event) {
  //   event.preventDefault();
  //   console.log(loginFormData);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/v1/login",
  //       loginFormData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     console.log(response.data.user._id);
  //     setUserId(response.data.user._id);
  //     console.log(userId);

  //     if (response.status === 200) {
  //       console.log("Successfully Logged In");
  //     }
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error in login:", error.message);
  //   }
  // }

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={loginSubmitHandler}>
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto m-2"
          placeholder="Username, email address, or mobile number"
          type="text"
          name="username"
          onChange={changeHandler}
          value={loginFormData.username}
        />
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto"
          placeholder="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={loginFormData.password}
        />
        <button
          className="text-white bg-blue-800 w-11/12 p-2 mx-auto m-2 rounded-full"
          type="submit"
        >
          Log In
        </button>

        <button className="m-2 font-semibold">Forgotten Password?</button>

        <button onClick={()=>{
            navigate("/signup")
        }} className="font-semibold mt-28 border-2 border-blue-600 text-blue-600 rounded-full w-11/12 p-2 mx-auto ">
          Create new account
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
