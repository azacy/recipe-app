

import React from "react";
// import  { useState, useEffect } from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar/searchbar";
// import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/navbar/navbar";
import "./components/navbar/navbar.css";
import { Route, Routes } from "react-router-dom";
import  {login} from "./components/Login/login"
import  {Signup} from "./components/Signup/signup"
import Homepage from "./components/homePage/homepage"


// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/homepage' element={<Homepage />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
