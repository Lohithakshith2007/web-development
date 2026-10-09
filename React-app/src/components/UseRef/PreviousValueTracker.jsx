import { useState, useRef,useEffect } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(()=>{
    previousCount.current=count
  },[count])

  return(
    <>
        <h5>current count: {count}</h5>
        <h5>previous count: {previousCount.current}</h5>
        <button onClick={()=> setCount((prev)=>prev+1)}>increment</button>
    </>
  )
}
