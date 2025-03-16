import { React, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ToastContainer,toast} from "react-toastify";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName]=useState('');
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        if (user) {
          await setDoc(doc(db, "Users", user.uid),{
            email:user.email,
            FullName:fullName,
          });
        }
        toast.success('User registered Successfully!!',{position:'top-center'});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.success(error.message,{position:'top-center'});
        console.log(errorCode + "" + errorMessage);
      });
  }
  return (
    <div className="flex  justify-center my-10 ">
      <div className="card bg-base-100 w-96 shadow-sm  ">
        <div className="card-body flex justify-center ">
          <h2 className="card-title ml-35 text-orange-500">SignUp</h2>
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
                placeholder="Full Name"
                pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/"
                minlength="3"
                maxlength="30"
                title="Only letters, numbers or dash"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
              className="btn btn-primary w-80 mr-4 on"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
          <label htmlFor="signUp" className="ml-32 text-orange-400">
            SignIn
          </label>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SignUp;
