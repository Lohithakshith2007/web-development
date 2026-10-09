import { useState, useRef, useEffect } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef(null);

  function handleClick(event) {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setIsOpen(false);
      return;
    }    
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={dropRef} >
      <button onClick={()=>{setIsOpen((prev)=>!prev)}}>{isOpen ? "close" : "open"}</button>
        {isOpen ? (
          <div style={{border:'2px solid black',width:'30%'}}>
            <h6>profile</h6>
            <h6>settings</h6>
            <h6>logout</h6>
          </div>
        ) : null}
    </div>
  );
}