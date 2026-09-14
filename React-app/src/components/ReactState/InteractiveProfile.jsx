import { useState } from "react";
import Card from '../dashboardExercise/Card.jsx'

function Profile() {
    const [user, setUser] = useState({
        name: "Lohith",
        role: "Full Stack Developer",
        isOnline: false
    });

    function toggleStatus() {
        setUser(prevUser => ({
            ...prevUser,
            isOnline: !prevUser.isOnline
        }));
    }

    function handleChange(event) {
        setUser(prevUser => ({
            ...prevUser,
            name: event.target.value 
        }));
    }
    return (
        <>
            <Card>
                <h5>{user.name}</h5>
                <h5> {user.role} </h5>
                <h5> {user.isOnline ? "🟢 Online" : "⚫ Offline"} </h5>
                <button onClick={toggleStatus}>toggle status</button> <br />
                <input type="text" placeholder="change the name" onChange={handleChange} />
                <h5> {user.isOnline && "⭐ Available for collaboration"} </h5>
            </Card>
        </>
    )
}

export default Profile;