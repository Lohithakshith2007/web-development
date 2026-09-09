function UserCard() {
  const user = {
    name: "Lohith",
    role: "Full-Stack Developer",
    isOnline: true
  };

  return (
    <div className="card-container">
      <h2>{user.name}</h2>
      <p style={{ color: "#666", fontWeight: "bold" }}>{user.role}</p>

      <span className={user.isOnline ? "badge online" : "badge offline"}>
        {user.isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
}

export default UserCard;