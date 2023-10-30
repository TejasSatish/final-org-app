import { React, useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import '../css/style.css' 
export default function Login(){
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }
    const [userDetails, setUserDetails] = useState({
        organisationName:"",
        username:"",
        password:"",
    })
    // useEffect(()=>{
    //     setUserDetails(formData)
    // },[formData])

    const handleInput=(e)=>{
        const {name, value}=e.target
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const loginDetails={
            organisationName:"",
            username:userDetails.username,
            password:userDetails.password,
        }
        
        await axios.post("http://localhost:3001/login",loginDetails,{
        'Content-type': 'application/json'
        }).then((response)=>{
            const status=response.status;
            console.log(`${response.statusText}`);
            console.log(`${response.data.organisationName}`);
            if(status==200){
                window.localStorage.setItem("organisation",`${response.data.organisationName}`);
                window.location="/donate"
            }
        })
        setUserDetails({
            username:"",
            password:"",
        })
    }
    return(
        
        <div className="container">

            <div class="login">
                    <span class="fas fa-sign-in-alt" aria-hidden="true"></span>
                    <strong>Welcome!</strong>
                    <span>Sign in to your account</span>

                    <form class="login-form"  onSubmit={handleSubmit}>
                        <fieldset>
                            <div class="form">
                                <div class="form-row">
                                    <span class="fas fa-user" aria-hidden="true"></span>
                                    <label class="form-label" for="input">Name</label>
                                    <input type="text" class="form-text" name="username" value={userDetails.username} onChange={handleInput}></input>
                                </div>
                                <div class="form-row">
                                    <span class="fas fa-eye" aria-hidden="true"></span>
                                    <label class="form-label" for="input">Password</label>
                                    <input type="password" class="form-text" name="password" value={userDetails.password} onChange={handleInput}></input>
                                </div>
                                <div class="form-row bottom">
                                   <Link to="/register" class="forgot"> Create a new account?</Link> 
                                </div>
                                <div class="form-row button-login">
                                    <button class="btn btn-login">Login <span class="fas fa-arrow-right" aria-hidden="true"></span></button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
        </div>
    );
}



