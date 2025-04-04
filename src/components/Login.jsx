import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { dataValidator } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignin, setIsSignIn] = useState(true);
  const [alertMessage, setAlertMessage] = useState(false);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  }, []);

  const handleLoginButton = () => {
    //Validate Data
    const message = dataValidator(email.current.value, password.current.value);
    setAlertMessage(message);
    console.log(message);
    //  console.log(email.current.value)
    if (message) return;

    if (!isSignin) {
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
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

              console.log("profile updated");
            })
            .catch((error) => {
              // An error occurred
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMessage(error.code + error.message);
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in logic

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAlertMessage("Incorrect id or password");
          console.log("error");
        });
    }
  };

  const handleClick = () => {
    setIsSignIn(!isSignin);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="h-screen object-cover md:h-[100%]"
          src={BACKGROUND}
          alt="loginPage-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-full  md:w-85 pb-20 pr-8 pl-8 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-6 rounded-lg shadow-lg opacity-85 ">
        <h1 className="mt-5 mb-4 text-2xl font-bold  text-white">
          {" "}
          {isSignin ? "Login" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="  align-middle text-sm my-4   px-4 py-3 w-full text-white bg-gray-800  "
          />
        )}
        <p></p>
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="  align-middle text-sm my-4   px-4 py-3 w-full text-white bg-gray-800  "
        />
        <p></p>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="  align-middle text-sm my-4 px-4 py-3 w-full text-white bg-gray-800   "
        />
        <p className="text-yellow-300 text-xs pt-2"> {alertMessage} </p>
        <button
          onClick={handleLoginButton}
          className="block rounded-md align-middle text-sm my-4 px-4 py-3 w-full text-white bg-red-700 cursor-pointer  ">
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p></p>
        <span
          className="text-white text-xs font-bold py-4 px-2 w-full cursor-pointer"
          onClick={handleClick}>
          {" "}
          {isSignin
            ? "New to Netflix?  Sign Up Now"
            : "Already registered Sign In Now"}
        </span>
      </form>
    </div>
  );
};

export default Login;
