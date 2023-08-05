import { React } from "react";
import { Link } from "react-router-dom";
import './register.css'
export default function Register(){
    return(
        <div className="container">
            <form>
                <input className="input" type="text"/><br/>
                <input className="input" type="password"/><br/>
                <input className="input" type="password"/><br/>
                <Link to="/register" className="button">Submit</Link>
                <Link to="/">Login</Link>
            </form>
        </div>
    );
}