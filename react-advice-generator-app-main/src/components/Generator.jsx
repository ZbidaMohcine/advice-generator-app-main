import { useState } from "react"
import fetchData from "../services/Service"
import logo from "/images/pattern-divider-desktop.svg"

export default function Generator() {
    const[data , setData]= useState({
        id:1,
        advice:"Click on the button below to get advice.  "
    })

const getAdvice=async()=>{
const result = await fetchData();
setData(result)
console.log("res",result)
}

    return (

        <div className="container">

            <p className={"adviceId"}> ADVICE # {data.id}</p>
            <p className={"advice"}>{data.advice}</p>
            <div className="logo">
                <img src={logo} alt={"image"} className="svg-image"/>
            </div>
            <div>
                <button onClick={getAdvice} className={"btnDiv"}>
                    <img src={'images/icon-dice.svg'} alt={"image"}/>
                </button>
            </div>


        </div>

    )
}