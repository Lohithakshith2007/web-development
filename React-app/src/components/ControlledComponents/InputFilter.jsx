import { use, useState } from "react";

function InputFilter() {
  const users = [
    { id: 1, name: "Lohith", role: "Full Stack Developer" },
    { id: 2, name: "Rahul", role: "Frontend Developer" },
    { id: 3, name: "Arjun", role: "Backend Developer" },
    { id: 4, name: "Priya", role: "UI/UX Designer" },
  ];

  const [search, setSearch] = useState("");

  const FilteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <label htmlFor="searchBar">Search:</label>
      <input
        type="text"
        name="searchBar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch("")}>Clear</button>

      {FilteredUsers.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <h5 style={{ color: "grey" }}>{user.role}</h5>
        </div>
      ))}

      {FilteredUsers.length === 0 && <p>No users found.</p>}
    </>
  );
}

export default InputFilter;
