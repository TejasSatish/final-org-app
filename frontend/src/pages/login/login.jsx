import { React, useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import './login.css' 
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
            <form onSubmit={handleSubmit}>
                <input className="input"  placeholder="username" type="text" name="username" value={userDetails.username} onChange={handleInput}/><br/><br/>
                <input className="input"  placeholder="password" type="password" name="password" value={userDetails.password} onChange={handleInput}/><br/><br/>
                <button>Submit</button>
                <Link to="/register">Create an account</Link>
            </form>
        </div>
    );
}