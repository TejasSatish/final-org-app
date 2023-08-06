import { React } from "react"

export default function Donate(){
    return(
        <div>
            <div className="donor">
            <input id="don-name" type="text" placeholder="name"/> 
            <input id="don-age" type="number" placeholder="age"/> 
            <input id="don-locality" type="text" placeholder="locality"/> 
            <input id="don-bloodType" type="text" placeholder="blood type"/> 
            <input id="don-organ" type="text" placeholder="organ"/> 
            <input id="don-organLife"type="text" placeholder="organ lifetime"/> 
            <button id="donate">Donate</button><br/><br/>
            </div>
        </div>
    )
}