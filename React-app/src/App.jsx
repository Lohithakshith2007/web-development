import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx';
import StudentData from './components/studentCards(props).jsx';

function App() {
  return (
    <>
    {/* user card exercise */}
    {/* <UserCard/> */}

    {/* student data exercise */}
    <StudentData name="Lohith" age={21} isStudent={true} major="Computer Science" cgpa={9.5}/>
    <StudentData name="John" age={22} isStudent={false} major="Mathematics" cgpa={8.2}/>
    <StudentData name="Alice" age={20} isStudent={true} major="Physics" cgpa={9.0}/>
    </>

  );
}

export default App;