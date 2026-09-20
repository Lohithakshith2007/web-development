import { useEffect, useState } from "react";

export default function UserListAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <p>{error}</p>
      {isMounted && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <br />
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setIsMounted(!isMounted)}>Toggle Mount</button>
    </>
  );
}
