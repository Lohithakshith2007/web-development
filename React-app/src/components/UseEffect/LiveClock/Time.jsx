  import { useEffect, useState } from "react";

  export default function Time() {
    const [time, settime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      console.log("use effect");
      
      const timer = setInterval(() => {
        console.log("timer running");
        settime(new Date().toLocaleTimeString());
        
      }, 1000);

      return () => {
        clearInterval(timer);
      };  
    }, []);

    return (
      <>
        <h1>current time</h1>
        <h1>{time}</h1>
      </>
    );
  }
