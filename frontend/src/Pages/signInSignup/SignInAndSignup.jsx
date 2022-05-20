import React from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./signInAndSignup.scss";

const SignInAndSignup = () => {
  return (
    <>
      <div className="signIn_and_signUp">
        <SignIn /> <SignUp />
      </div>
    </>
  );
};

export default SignInAndSignup;
