import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx';
import StudentData from './components/StudentCards(props).jsx';
import ProfileCard from './components/ProfileCard.jsx';
import UserDashboard from './components/dashboardExercise/userDashboard.jsx';


function App() {
const isLoggedIn = true;

const users = [
  {
    id: 1,
    name: "Lohith",
    role: "Full Stack Developer",
    isOnline: true
  },
  {
    id: 2,
    name: "Rahul",
    role: "Frontend Developer",
    isOnline: false
  },
  {
    id: 3,
    name: "Arjun",
    role: "Backend Developer",
    isOnline: true
  }
];

  function handleFollow() {
    console.log("Follow button clicked");
  }

  return (
    <>
      {/* user card exercise */}
      {/* <UserCard/> */}

      {/* student cards exercise */}
      {/* <StudentData name="Lohith" age={21} isStudent={true} major="Computer Science" cgpa={9.5}/>
    <StudentData name="sreesanth" age={22} isStudent={false} major="Mathematics" cgpa={8.2}/>
    <StudentData name="akshay" age={20} isStudent={true} major="Physics" cgpa={9.0}/>
    <StudentData name="karthik" age={23} isStudent={false} major="Chemistry" cgpa={7.8}/> */}

      {/* Exercise: Profile Card */}
      {/* <ProfileCard
        user={users}
        onfollow={handleFollow}
      /> */}

      <UserDashboard 
      users={users}
      isloggedin={isLoggedIn}
      />

      


    </>

  );
}

export default App;