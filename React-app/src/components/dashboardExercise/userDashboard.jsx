import UsersList from './UsersList.jsx';
import User from './User.jsx';

function UserDashboard({users,isloggedin}){

    return(
        <>
        {isloggedin? <UsersList users={users} />: <p>Please log in to continue.</p> }
        </>        

    )
}

export default UserDashboard;