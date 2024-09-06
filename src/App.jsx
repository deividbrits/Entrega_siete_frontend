import React from "react";
import UserState from "./context/user/UserState";
import MangaState from "./context/Manga/MangaState";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { Profile } from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthRoute from "./components/Auth/AuthRoute";
import { Page1 } from "./Pages/Page1";

export const App = () => {
  return (
    <UserState>
      <MangaState>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/profile"
              element={<PrivateRoute element={<Profile />} />}
            />

            <Route path="/login" element={<AuthRoute element={<Login />} />} />
            <Route
              path="/register"
              element={<AuthRoute element={<Register />} />}
            />

            <Route path="/" element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </MangaState>
    </UserState>
  );
};

export default App;
