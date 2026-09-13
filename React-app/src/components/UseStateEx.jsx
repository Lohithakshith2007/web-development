import { useState } from "react";

function Counter(){
    const [count,setcount]=useState(0);
    return(
        <>
        <h4>you clicked {count} times</h4>
        <button onClick={()=>setcount(count+1)}>click</button>
        </>
    )
}

export default Counter;