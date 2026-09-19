import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard.jsx";

import StudentData from "./components/StudentCards(props).jsx";

import ProfileCard from "./components/profileCard.jsx";

import UserDashboard from "./components/dashboardExercise/userDashboard.jsx";

import ProductsDashboard from "./components/productsDashboardExercise/ProductDashboard.jsx";

import Counter from "./components/ReactState/UseStateEx.jsx";

import Profile from "./components/ReactState/InteractiveProfile.jsx";

import TodoApp from "./components/ReactState/TodoApp.jsx";

import MiniShoppingCart from "./components/ReactState/MiniShoppingCart.jsx";

import ControlledInput from "./components/ControlledComponents/ControlledComponent.jsx";

import ContactForm from "./components/ControlledComponents/ContactForm.jsx";

import InputFilter from "./components/ControlledComponents/InputFilter.jsx";

import RegistrationForm from "./components/UseEffect/UseEffect.jsx";

import VisibleBugDemo from "./components/UseEffect/UseEffect.jsx";

import LivePageTitle from "./components/UseEffect/LivePageTitle.jsx";

function App() {

  const isLoggedIn = true;

  const users = [
    {
      id: 1,
      name: "Lohith",
      role: "Full Stack Developer",
      isOnline: true,
    },
    {
      id: 2,
      name: "Rahul",
      role: "Frontend Developer",
      isOnline: false,
    },
    {
      id: 3,
      name: "Arjun",
      role: "Backend Developer",
      isOnline: true,
    },
  ];

  function handleFollow() {
    console.log("Follow button clicked");
  }

  // products Dashboard exercise
  const isAdmin = true;

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 75000,
      inStock: true,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Headphones",
      price: 5000,
      inStock: false,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 3000,
      inStock: true,
      category: "Accessories",
    },
  ];

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

      {/* User Dashboard exercise */}
      {/* <UserDashboard 
      users={users}
      isloggedin={isLoggedIn}
      /> */}

      {/* Products Dashboard exercise */}
      {/* <ProductsDashboard
        products={products}
        isAdmin={isAdmin}
      /> */}

      {/* simple counter example using useState */}
      {/* <Counter/> */}

      {/* interactive profile card exercise with useState */}
      {/* <Profile/> */}

      {/* Todo list exercise with useState */}
      {/* <TodoApp/> */}

      {/* Mini Shopping Cart exercise */}
      {/* <MiniShoppingCart/> */}

      {/* Controlled Component exercise */}
      {/* <ControlledInput/> */}

      {/* Contact Form exercise */}
      {/* <ContactForm/> */}

      {/* Input Filter exercise */}
      {/* <InputFilter /> */}

      {/* Registration Form exercise */}  
      {/* <RegistrationForm /> */}

      {/* Visible useEffect Bug Demo exercise */}
      {/* <VisibleBugDemo /> */}

      {/* Live Page Title exercise */}
      <LivePageTitle />


    </>
  );
}

export default App;
