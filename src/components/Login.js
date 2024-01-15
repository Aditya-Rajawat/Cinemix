import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { EmailValidate, PasswordValidate } from "./Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [emailErr, setEmailErr] = useState(true);
  const [passErr, setPassErr] = useState(true);
  const [width,setWidth]=useState(window.innerWidth);
  const [isAutheticated, setAuthenticated] = useState(true);
  const dispatch=useDispatch();


  useEffect(()=>{
    window.addEventListener("resize",()=>setWidth(window.innerWidth))
  },[])

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setAuthenticated(true);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handleEmailFocus = () => {
    setEmailErr(EmailValidate(email.current.value));
  };

  const handlePassFocus = () => {
    setPassErr(PasswordValidate(password.current.value));
  };

  const handleButtonClick = () => {
    const emailValid = EmailValidate(email.current.value);
    const passValid = PasswordValidate(password.current.value);
    setEmailErr(emailValid);
    setPassErr(passValid);
    if (!emailValid || !passValid) {
      return;
    }
    setAuthenticated(true);
    if (isSignInForm) {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user)
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setAuthenticated(false);
        });
    } else {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // console.log("user",user)
              dispatch(addUser({uid:user.uid,email:user.email,displayName:user.displayName}));
            })
            .catch((error) => {
              // An error occurred
              setAuthenticated(false);
            });
          
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setAuthenticated(false);
        });
    }
  };

  return (
    <div className="relative overflow-x-clip">
      <Header />
  
      {width>=1024 ? (
        <div>
        <img
          className="object-cover h-[900px]"
          src={LOGIN_BG}
        />
      </div>
      ) : (
          <div className="bg-black h-[1000px] w-full"></div>
      )}
      <div className="h-[650px] w-screen md1:w-4/12 absolute mx-auto md1:left-0 md1:right-0 top-24 p-14 bg-black bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()} className="">
          <h1 className="text-white mx-2 text-3xl mb-6 font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isAutheticated && (
            <div className="md1:w-11/12 bg-[#e87c03] rounded-[3.5px] m-2 md1:p-4">
              <p className="text-white text-md">
                {isSignInForm
                  ? "Email or password is incorrect."
                  : "Email already in use. Please use a different email."}
              </p>
            </div>
          )}
          {!isSignInForm && (
            <input
              ref={name}
              placeholder="Full Name"
              className="w-11/12 h-[50px] m-2 bg-[#333333] text-[#8C8C8C] px-4 rounded-[3.5px] focus:bg-[#4b4a4a] focus:outline-none focus:pt-2 focus:placeholder:-translate-y-4 focus:placeholder:text-xs focus:placeholder:transition-all focus:placeholder:delay-50 focus:placeholder:scale-y-95 [&:not(:focus)]:placeholder:scale-y-100 [&:not(:focus)]:placeholder:transition-all"
            />
          )}
          <input
            ref={email}
            onBlur={handleEmailFocus}
            onChange={(e) => {
              setEmailErr(EmailValidate(e.target.value));
            }}
            placeholder="Email or phone number"
            className={`w-11/12 h-[50px] m-2 bg-[#333333] text-[#8C8C8C] px-4 rounded-[3.5px] focus:bg-[#4b4a4a] focus:outline-none focus:pt-2 focus:placeholder:-translate-y-4 focus:placeholder:text-xs focus:placeholder:transition-all focus:placeholder:delay-50 focus:placeholder:scale-y-95 [&:not(:focus)]:placeholder:scale-y-100 [&:not(:focus)]:placeholder:transition-all ${
              !emailErr ? "border-b-2 border-[#e87c03]" : ""
            }`}
          />
          {!emailErr && (
            <p className="text-[#e87c03] mx-2 text-[13px] mb-2">
              Please enter a valid email address or phone number.
            </p>
          )}
          <input
            ref={password}
            onChange={(e) => {
              setPassErr(PasswordValidate(e.target.value));
            }}
            placeholder="Password"
            onBlur={handlePassFocus}
            className={`w-11/12 m-2 h-[50px] bg-[#333333] text-[#8C8C8C] px-4 rounded-[3.5px] focus:bg-[#4b4a4a] focus:outline-none focus:pt-2 focus:placeholder:-translate-y-4 focus:placeholder:text-xs focus:placeholder:transition-all focus:placeholder:delay-50 focus:placeholder:scale-y-95 [&:not(:focus)]:placeholder:scale-y-100 [&:not(:focus)]:placeholder:transition-all ${
              !passErr ? "border-b-2 border-[#e87c03]" : ""
            }`}
          />
          {!passErr && (
            <p className="text-[#e87c03] mx-2 text-[13px] mb-2">
              Your password must contain between 4 and 60 characters.
            </p>
          )}
          <button
            className="bg-[#E50914] w-11/12 h-12 rounded-[3.5px] text-white font-semibold mt-8 mx-2"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm && (
            <div className="mx-2 my-4 flex items-center">
              <input
                id="remember-checkbox"
                type="checkbox"
                className="h-4 w-4 accent-white focus:accent-gray-600"
              />
              <label className="text-[#8C8C8C] mx-2 text-sm">Remember Me</label>
            </div>
          )}
          <div className="flex items-center mt-20">
            <p className="mx-2 text-[#8C8C8C]">
              {isSignInForm ? "New to Netflix?" : "Already Registered?"}
            </p>
            <p
              className="text-white hover:cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </p>
          </div>
          <div className="mx-2 my-2 flex items-baseline">
            <p className="text-[#8C8C8C] text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link className="text-blue-500 hover:underline hover:cursor-pointer mx-1">
                Learn more.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
