import { React,useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { useMoralis } from "react-moralis"

import './navbar.css'
export default function Navbar(){
    const location = useLocation();

    const {enableWeb3, account, isWeb3Enabled, isWeb3EnableLoading, Moralis, deactivateWeb3 }=useMoralis();
    useEffect(()=>{
        if(isWeb3Enabled) return
        if(typeof window!=="undefined"){
            if(window.localStorage.getItem("connected")){
                enableWeb3()
            }
        }

    },[isWeb3Enabled])

    useEffect(()=>{
        Moralis.onAccountChanged((account)=>{
            console.log(`${account}`)
            if(account==null){
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    },[])

    if(location.pathname === "/" ||location.pathname === "/register") {
        return <div/>
    }
    return(
        <div className="navbar">
            
            <div className="navlinks">
                <Link to="/donate">Donate</Link>
                <Link to="/recieve">Recieve</Link>
                <Link to="/dashboard">Dashboard </Link>
            </div>
            <div className="accountlinks">
                {account ?
                 <Link>Connected to {account.slice(0,6)}...{account.slice(account.length-4)}</Link> : 
                 <Link onClick={async ()=>{
                    await enableWeb3()
                    if(typeof window!=="undefined"){
                        window.localStorage.setItem("connected","injected")
                    }
                    }}>Connect</Link> }
                <Link to="/">Logout</Link>
            </div>
        </div>
    );
}