import React from "react";
import UserState from "./context/user/UserState";
import MangaState from "./context/Manga/MangaState";
import {BrowserRouter as Router,  Routes, Route, } from "react-router-dom";
import Header from "./components/Layout/Header";
import PrivateRoute from "./components/Auth/PrivateRoute";
import  {Profile}  from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthRoute from "./components/Auth/AuthRoute";
import { Page1 } from "./Pages/Page1";
import { AboutUs } from "./Pages/AboutUs";
import { AskIa } from "./Pages/AskIa";

export const App = () => {
  return (
    <UserState>
      <MangaState>
        
        <Router>
        <Header />
          <Routes>
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}>
            
            
            </Route>

            



            <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/register" element={<Register />}/>
            <Route path="/" element={<Page1 />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="ask-ia" elemente={<AskIa />} />

          </Routes>
          </Router>
      </MangaState>
    </UserState>
  );
};
console.log(App)
export default App;
