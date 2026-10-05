import { useState, useEffect } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      console.log(`searching for ${search}...`);
      setMessage(`searching for ${search}...`);
    }
  }, [search]);

  function Reset(){
    setSearch(""); // Clear the search field
    setMessage("");
  }

  return (
    <>
        <input
      type="text"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    {message && <p>{message}</p>}
    <button onClick={Reset}>Reset</button>


    </>
    
  );
}
