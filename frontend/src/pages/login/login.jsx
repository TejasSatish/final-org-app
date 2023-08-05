import { React } from "react";
import { Link, useNavigate} from "react-router-dom";
import './login.css' 
export default function Login(){
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `newPath`; 
    //   navigate(path);
    // }
    return(
        <div className="container">
            <form>
                <input className="input" type="text"/><br/><br/>
                <input className="input" type="password"/><br/><br/>
                <Link to="/donate" className="button">Submit</Link>
                <Link to="/register">Create an account</Link>
            </form>
        </div>
    );
}