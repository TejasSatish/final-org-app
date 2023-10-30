import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css'
//import '../css/style.css' 
export default function Register(){
    const [userDetails, setUserDetails] = useState({
        organisationName:"",
        username:"",
        password:"",
    })

    const handleInput=(e)=>{
        const {name, value}=e.target
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const loginDetails={
            organisationName:userDetails.organisationName,
            username:userDetails.username,
            password:userDetails.password,
        }
        
        axios.post("http://localhost:3001/register",loginDetails,{
        'Content-Type': 'application/json'
        }).then((response)=>{
            const status=response.status
            console.log(response);
            if(status===200){
                window.location="/"
            }
            console.error(response.data)
        }) 
        setUserDetails({
            organisationName:"",
            username:"",
            password:"",
        })
    }
    return(
        <div className="container">

            <div class="register">
                    <span class="fas fa-user-circle" aria-hidden="true"></span>
                    <strong>Create account!</strong>
                    <form class="register-form" onSubmit={handleSubmit}>
                        <fieldset>
                            <div class="form">
                                <div class="form-row">
                                    <span class="fas fa-user" aria-hidden="true"></span>
                                    <label class="form-label" for="input">Organisation</label>
                                    <input type="text" class="form-text" name="organisationName" value={userDetails.organisationName} onChange={handleInput}></input>
                                </div>
                                <div class="form-row">
                                    <span class="fas fa-envelope" aria-hidden="true"></span>
                                    <label class="form-label" for="input">Username</label>
                                    <input type="text" name="username" class="form-text" value={userDetails.username} onChange={handleInput}></input>
                                </div>
                                <div class="form-row">
                                    <span class="fas fa-lock" placeholder="username"aria-hidden="true"></span>
                                    <label class="form-label" for="input">Password</label>
                                    <input type="password" class="form-text" name="password" value={userDetails.password} onChange={handleInput}></input>
                                </div>
                                <div class="form-row">
                                    <span class="fas fa-lock" aria-hidden="true"></span>
                                    <label class="form-label" for="input" >Confirm Password</label>
                                    <input type="password" class="form-text"></input>
                                </div>
                                <div class="form-row bottom">
                                   <Link to="/" class="forgot"> Already have an account?</Link> 
                                </div>
                                <div class="form-row button-login">
                                    <button class="btn btn-login">Create <span class="fas fa-arrow-right" aria-hidden="true"></span></button>
                                </div>
                            </div>
                        </fieldset>
                </form>
                </div>
        </div>
    );
}