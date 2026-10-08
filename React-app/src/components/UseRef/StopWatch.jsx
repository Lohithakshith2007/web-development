import { useState, useRef, useEffect } from "react";

export default function StopWatch(){

    const timerRef=useRef(null)
    const [time, settime] = useState(0);

    useEffect(() => {
      return () => {
        clearInterval(timerRef.current);
      };  
    }, []);

    function startTimer(){
      if(timerRef.current){
       return
      }
       timerRef.current = setInterval(() => {
        console.log("timer running");
        settime((prevTime)=>prevTime+1);
      }, 1000);
    }

    function stopTimer(){
        clearInterval(timerRef.current)
        timerRef.current=null
        
    }

    function resetTimer(){
      clearInterval(timerRef.current)
      settime(0)
      timerRef.current=null
    }

    return(
        <>
        <h1>Stop Watch</h1>
        <h4>{time}</h4>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>reset</button>
        </>
    )
}