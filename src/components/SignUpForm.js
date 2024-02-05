import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

function SignUpForm() {

  const navigate = useNavigate();
  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    email: "",
    name: "",
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

  async function submitHandler(event) {
    event.preventDefault();
    console.log(signUpFormData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/signup",
        signUpFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status===200) {
        console.log("Successfully signed up")
        toast.success("Registered Successfully")
      }
      navigate('/login');

      // Reset form after successful submission
      setSignUpFormData({
        username: "",
        email: "",
        name: "",
        password: "",
      });

      console.log("Signed up successfully!");

      
    
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error("Error Signing up, Please try again later")
    }
  }

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-2 mx-auto "
          placeholder="Username"
          type="text"
          name="username"
          onChange={changeHandler}
          value={signUpFormData.username}
          required
        />
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
          name="name"
          onChange={changeHandler}
          value={signUpFormData.name}
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
