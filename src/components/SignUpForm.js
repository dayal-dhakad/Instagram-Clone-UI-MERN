import React, { useState } from "react";

function SignUpForm() {
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  function changeHandler(event) {
    setSignUpFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(signUpFormData);
  }

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto m-2"
          placeholder="Email"
          type="email"
          name="email"
          onChange={changeHandler}
          value={signUpFormData.email}
        />
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto "
          placeholder="Full Name"
          type="text"
          name="fullName"
          onChange={changeHandler}
          value={signUpFormData.fullName}
        />
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-3 mx-auto m-2"
          placeholder="Password"
          type="password"
          name="password"
          onChange={changeHandler}
          value={signUpFormData.password}
        />
        <button
          className="text-white bg-blue-800 w-11/12 p-2 mx-auto m-2 rounded-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
