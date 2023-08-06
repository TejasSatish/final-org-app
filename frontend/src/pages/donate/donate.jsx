import { React } from "react"
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import { abi, hardhatContractAddress, sepoliaContractAddress } from "../../constants/constants"
export default function Donate(){

    const { chainId: chainIdHex }= useMoralis()
    const chainId=parseInt(chainIdHex)
    const storageAddress=sepoliaContractAddress
    // const {runContractFunction: createNewDonor}= useWeb3Contract({
    //     abi:abi,
    //     contractAddress:storageAddress,
    //     functionName:"createNewDonor",
    //     params:{
    //         _name:, 
    //         _age:, 
    //         _locality:,
    //         _bloodtype:,
    //         _organ:,
    //         _organLife:,
    //         _hospitalName:,
    //     },
    // })

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