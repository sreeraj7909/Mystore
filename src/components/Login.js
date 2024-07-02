import { useRef, useState } from "react";
import Header from "./Header"
import { checkvalidate } from "../utils/checkvalidate";
import { BG_URL } from "../utils/constants";

const Login=()=>{
    
    const [isSignIn,setIsSignIn]=useState(true)
    const [error,setError]=useState(null)
    const name=useRef(null)
    const Email=useRef(null)
    const Password=useRef(null)

    const handleOnClick=()=>{
      setIsSignIn(!isSignIn)
    }
    const handleForm=()=>{
       if(isSignIn){
        const Error=checkvalidate(Email.current.value,Password.current.value)
        setError(Error)
       }else{
        const Error=checkvalidate(Email.current.value,Password.current.value,name.current.value)
        setError(Error)
       }
    }

    return(
        <div>
            <Header/>
            <div className=" absolute w-full">
                <img src={BG_URL} alt="Bg-image"></img>
            </div>
            <div className="mt-24   z-50 ">
                <form className="bg-green-300 w-4/12 p-8 bg-opacity-65 m-auto left-0 right-0 rounded-lg absolute" onSubmit={(e)=>e.preventDefault()}>
                    <h1 className="text-2xl my-3  rounded-sm font-bold">{isSignIn?"SignIn":"SignUp"}</h1>
                    {!isSignIn && <input className=" p-3 w-full my-2 rounded-lg bg-gray-200" ref={name} type="text" placeholder="Fullname"></input> }
                    <input className=" p-3 w-full my-2 rounded-lg bg-gray-200" type="text" placeholder="Email" ref={Email}></input>
                    <input className=" p-3 w-full my-2 rounded-lg bg-gray-200" type="text" placeholder="Password" ref={Password}></input>
                    <p className="text-red-600 font-bold">{error}</p>
                    <button className=" p-3 w-full my-4 rounded-lg bg-green-800 text-white text-xl font-bold " onClick={handleForm}>{isSignIn?"SignIn":"SignUp"}</button>
                    <p className="cursor-pointer" onClick={handleOnClick}>{isSignIn?"New user? Sign Up":"Already a user? SignIn"}</p>
                </form>
            </div>
         
        </div>
    )
}

export default Login;