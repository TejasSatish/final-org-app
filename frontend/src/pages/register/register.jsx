import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css'
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
            <form onSubmit={handleSubmit}>
                <input className="input"  placeholder="organisation" type="text" name="organisationName" value={userDetails.organisationName} onChange={handleInput}/><br/>
                <input className="input"  placeholder="username" type="text" name="username"value={userDetails.username} onChange={handleInput}/><br/>
                <input className="input"  placeholder="password" type="password" name="password"value={userDetails.password} onChange={handleInput}/><br/>
                <input className="input"  placeholder="confirm password" type="password"/><br/>
                <button>Submit</button>
                <Link to="/">Login</Link>
            </form>
        </div>
    );
}