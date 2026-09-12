import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx';
import StudentData from './components/studentCards(props).jsx';
import ProfileCard from './components/profileCard.jsx';
function App() {

  const user = {
    name: "Lohith",
    age: 21,
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

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
      <ProfileCard
        user={user}
        onfollow={handleFollow}
      />


    </>

  );
}

export default App;