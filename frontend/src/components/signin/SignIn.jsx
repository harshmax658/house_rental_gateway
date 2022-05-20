import React from "react";
import UseLoginAndSignin from "../../customHook/UseLoginAndSignin";
import FormInput from "../formInput/FormInput";
import "./signin.scss";
import CustomButton from "../custom-button/CustomButton";

import { LoginStyle } from "./SigninStyle";
import { useDispatch } from "react-redux";
import { SignInAction } from "../../redux/user/action";
import { useNavigate } from "react-router-dom";

useNavigate;
const SignIn = () => {
  const nav = useNavigate();
  const { login, onChangeHandler } = UseLoginAndSignin("login");
  const { email, password } = login;
  const dispatch = useDispatch();

  const SignIn = async () => {
    const response = await fetch("api/user/user-login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: "include",
      body: JSON.stringify(login),
    });
    if (response.status === 200) {
      const data = await response.json();
      dispatch(SignInAction(data.user));
      nav("/");
    } else {
      console.log("error");
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    SignIn();
  };
  return (
    <LoginStyle>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={loginHandler}>
        <FormInput
          value={email}
          type="email"
          name="email"
          label="Email"
          onChange={onChangeHandler}
        />

        <FormInput
          value={password}
          type="password"
          label="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <div className="buttons">
          <CustomButton value="Login">Sign In</CustomButton>
          {/* <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
            value="Login"
          >
            Sign in with Google
          </CustomButton> */}
        </div>
      </form>
    </LoginStyle>
  );
};

export default SignIn;
