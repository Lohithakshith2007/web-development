import { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const renderCount = useRef(0);
  const [count, setcount] = useState(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      <h1>render counter</h1>
      <h4>the component has rendered {renderCount.current} times</h4>
      <h4>count: {count}</h4>
      <button onClick={() => setcount((prevcount) => prevcount + 1)}>
        click
      </button>
    </>
  );
}
