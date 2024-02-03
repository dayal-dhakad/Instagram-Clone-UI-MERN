import React, { useState } from "react";

function SignUpFormUsername() {
  const [signUpFormDataUsername, setSignUpFormDataUsername] = useState({
    username: "",
  });

  function changeHandler(event) {
    setSignUpFormDataUsername((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(signUpFormDataUsername);
  }

  return (
    <div>
      <form className="flex flex-col " action="" onSubmit={submitHandler}>
        <input
          className="w-11/12 border-2 border-slate-300 rounded-md p-2 mx-auto m-3"
          placeholder="Username"
          type="text"
          name="username"
          onChange={changeHandler}
          value={signUpFormDataUsername.username}
          required
        />
        <button
          className="text-white w-11/12 mx-auto p-2 bg-blue-800 rounded-lg"
          type="submit"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default SignUpFormUsername;
