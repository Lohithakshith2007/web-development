import { useState } from "react";
import Counter from "./Counter";

export default function LivePageTitle() {
  const [showCounter, setshowCounter] = useState(false);
  return (
    <>
      {showCounter && <Counter />}
      <button onClick={() => setshowCounter(!showCounter)}>
        Show/Hide Counter
      </button>
    </>
  );
}
