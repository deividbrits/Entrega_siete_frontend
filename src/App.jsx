import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/user/UserState";
import MangaState from "./context/Manga/MangaState";
import Header from "./components/Layout/Header";
import PrivateRoute from "./components/Auth/PrivateRoute";
import AuthRoute from "./components/Auth/AuthRoute";       
import {Profile} from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Page1} from "./Pages/Page1";
import { AboutUs } from "./Pages/AboutUs";
import {AskIa} from "./Pages/AskIa";
import  ShoppingCar  from "./Pages/ShoppingCar";
import { LogOut } from "./Pages/LogOut";

export const App = () => {
  return (
    <UserState>
      <MangaState>
        <Router>
          <Header />
          <Routes>
            
            <Route path="/" element={<Page1 />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/ask-ia" element={<AskIa />} />
            <Route path="/shoppingcard" element={<ShoppingCar />} />
            
          
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogOut />} />
            
          </Routes>
        </Router>
      </MangaState>
    </UserState>
  );
};

export default App;
