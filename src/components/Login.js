import Header from "./Header.js";
import { useState } from "react";


const Login=()=>{
   const [isSignIn,setisSignIn]=useState([true]);
   const toggleSignInForm=()=>{
      setisSignIn(!isSignIn);
   }
   return( 
        <div >
           <Header/>
           <div className="absolute">
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
           </div>
           <form className="w-1/4 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80">
                <h1 className="py-4 font-bold text-3xl ">{isSignIn ? "Sign In": "Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-600"/>}
                <input type="text" placeholder="Email" className="p-2 my-4 w-full bg-gray-600"/>
                <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-600"/>
                <button className="p-4 my-6 bg-red-700 w-full rounded">{isSignIn ? "Sign In": "Sign Up"}</button>
                <p onClick={toggleSignInForm} className="cursor-pointer">{isSignIn ? "New to Netflix-GPT? Sign Up": "Already Registered Sign in"}</p>
           </form>
        </div> 
    );
};
export default Login;