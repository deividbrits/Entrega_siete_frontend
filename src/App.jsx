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

export const App = () => {
  return (
    <UserState>
      <MangaState>
        <Header />
        <Router>
      
          <Routes>
            <Route>
                <Route path="/profile" element={<PrivateRoute component={<Profile />} />} />
                <Route path="/login" element={<AuthRoute component={Login} />} />
                <Route path="/register" element={<AuthRoute component={Register} />} />
                {/* <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
                <Route path="/" element={<Page1 />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Route>    
          </Routes>
          </Router>
      </MangaState>
    </UserState>
  );
};
console.log(App)
export default App;
