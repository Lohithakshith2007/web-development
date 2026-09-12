import Card from './Card.jsx'

function User({ user }) {
    return (
        <>
            <Card>
                <h3>{user.id}</h3>
                <h3>{user.name}</h3>
                <h3>{user.role}</h3>
                <h3>{user.isOnline ? "🟢 Online" : "⚫ Offline"}</h3>
                <h3>{user.isOnline && "⭐ Available for collaboration"}</h3>
            </Card>
        </>
    )
}
export default User;