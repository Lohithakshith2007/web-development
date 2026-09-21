import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title =  `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer started");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h3>count: {count}</h3>
      <button onClick={() => setcount((prevcount) => prevcount - 1)}>-1</button>
      <button onClick={() => setcount((prevcount) => prevcount + 1)}>+1</button>
    </>
  );
}


