import React from "react";
import "./App.css";
// import Main from "./components/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import BlogPlate2 from "./components/BlogPlate2";
import { AuthProvider } from "./components/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";


export const authUser = React.createContext();

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/Home" element={<BlogPlate2 />} />
              <Route path="/BlogPage/:uid" element={<BlogPage />} />
              <Route path="/main/:username1" element={<Dashboard/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
