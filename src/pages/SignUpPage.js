import React, { useState } from "react";

import SignUpForm from "../components/SignUpForm";

function SignUpPage() {
 

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 ... ">
     
        <div>
          <div>
            <h1 className="text-center text-3xl pt-6">Let's get started</h1>
            <p className="text-center m-3">Fill below details carefully</p>
            <SignUpForm />
          </div>
        </div>
      
    </div>
  );
}

export default SignUpPage;
