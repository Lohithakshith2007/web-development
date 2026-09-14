import { useState } from "react";

function Counter(){
    const [count,setcount]=useState(0);
    return(
        <div onMouseEnter={() => console.log("Mouse entered")}>
    Hover over me
</div>
    )
}

export default Counter;