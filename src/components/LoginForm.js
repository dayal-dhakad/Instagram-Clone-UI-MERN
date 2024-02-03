import React, { useState } from "react";

function LoginForm() {
  const [loginFormData, setloginFormData] = useState({
    userName: "",
    password: "",
  });

  function changeHandler(event) {
    setloginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(loginFormData);
  }

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto m-2"
          placeholder="Username, email address, or mobile number"
          type="text"
          name="userName"
          onChange={changeHandler}
          value={loginFormData.userName}
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

        <button className="font-semibold mt-28 border-2 border-blue-600 text-blue-600 rounded-full w-11/12 p-2 mx-auto ">
          Create new account
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
