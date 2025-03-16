import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginStatus, setLogin] = useState(true);

  function handleToggelSignin() {
    setLogin(!LoginStatus);
  }

  const navigate = useNavigate();
  const handleLogin = () => {
    if (!LoginStatus) {
  
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    }
  };
  return (
    <>
      {LoginStatus ? (
        <div className="flex  justify-center my-10 ">
          <div className="card bg-base-100 w-96 shadow-sm  ">
            <div className="card-body flex justify-center ">
              <h2 className="card-title ml-35 text-orange-500">SignIn</h2>
              <div>
                <label className="input validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="Email"
                    pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/"
                    minlength="3"
                    maxlength="30"
                    title="Only letters, numbers or dash"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <p className="validator-hint">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </div>
              <div>
                <label className="input validator">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http ://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="Password"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minlength="3"
                    maxlength="30"
                    title="Only letters, numbers or dash"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <p className="validator-hint">
                  Must be Mininum 8 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </div>
              <div className="card-actions justify-center">
                <button
                  className="btn btn-primary w-80 mr-4"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <label
                  htmlFor="signUp"
                  className="ml-32 text-orange-400"
                  onClick={handleToggelSignin}
                >
                  New to DevTinder? SignUp
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SignUp />
      )}
    </>
  );
};

export default Login;
