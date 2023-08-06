import { React } from "react"

export default function Receive(){
    return(
        <div>
            <div className="donor">
                <input id="rec-name" type="text" placeholder="name"/> 
                <input id="rec-age" type="age" placeholder="age"/> 
                <input id="rec-locality" type="text" placeholder="locality"/> 
                <input id="rec-bloodType" type="text" placeholder="blood type"/> 
                <input id="rec-organ" type="text" placeholder="organ"/>  
                <button id="receive">Receive</button><br/><br/>
            </div>
        </div>
    )
}