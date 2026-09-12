import User from './User.jsx';

function UsersList({users}){
    return(
        <>
        {users.map(user=>(
            <User key={user.id} user={user} />
        ))}
        </>
    )
}

export default UsersList; 