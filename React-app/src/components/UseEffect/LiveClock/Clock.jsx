import { useState } from "react";
import Time from "./Time";

export default function Clock(){
    const [ShowTime,setShowTime]=useState(false)
    return(
        <>
        {ShowTime && <Time/>}
        <button onClick={()=>{setShowTime(!ShowTime)}}>show/hide Time</button>
        </>
    )
}