import React from "react";
import "./App.css";
import Main from "./components/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogPlate2 from "./components/BlogPlate2";

const authvalue = {
  username: sessionStorage.getItem("userName"),
  isAuthenticated: sessionStorage.getItem("isAuthenticated")||false,
  // isAuthenticated: true,

  signin() {
    sessionStorage.setItem("isAuthenticated", true);
    this.isAuthenticated = true;
    console.log("signin", authvalue.username);
  },
  signout() {
    sessionStorage.setItem("isAuthenticated", false);
    this.isAuthenticated = false;
  },
};

export const authUser = React.createContext();

function App() {
  return (
    <div className="App">
      <authUser.Provider value={authvalue}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/Home" element={<BlogPlate2 />} />
              <Route path="/BlogPage/:uid" element={<BlogPage />} />
              
            </Route>
            <Route path="/" element={<Main />}>
            <Route path="/main/:username1" element={<Dashboard/>} />
            <Route path="/HomeMain" element={<BlogPlate2 />}/>
            </Route>
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </authUser.Provider>
    </div>
  );
}

export default App;
