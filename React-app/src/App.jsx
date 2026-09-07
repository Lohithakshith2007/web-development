import { useState } from 'react'
import './App.css'

function UserCard() {
  const user = {
    name: "Lohith",
    role: "Full-Stack Developer",
    avatarUrl: "https://via.placeholder.com/150",
    isOnline: true
  };

  return (
    <div className="card-container">
      <img src={user.avatarUrl} alt={user.name} className="avatar-img" />
      <h2>{user.name}</h2>
      <p style={{ color: "#666", fontWeight: "bold" }}>{user.role}</p>

      <span className={user.isOnline ? "badge online" : "badge offline"}>
        {user.isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
}

export default UserCard;