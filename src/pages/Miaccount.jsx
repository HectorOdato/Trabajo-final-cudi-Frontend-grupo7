import React from "react";
import SignUpPage from "../components/AccountPage/SignUp";
import LoginPage from "../components/AccountPage/Login";

function MiAccount (){
    return <>
    <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-start gap-20">
    <LoginPage/>
    <SignUpPage/></div></div>
    </>
    
}

export default MiAccount