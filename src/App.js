import React from "react";
import "./App.css";
import Main from "./components/Main";
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

console.log(localStorage.getItem("userName"));
const authvalue = {
  username: localStorage.getItem("userName"),
  isAutheticated: localStorage.getItem("isAuthenticated"),
  signin() {
    localStorage.setItem("isAuthenticated",1);
    // authvalue.isAutheticated = true
    console.log("signin",authvalue.username);
  },
  signout() {
    localStorage.setItem("isAuthenticated",0);
    // authvalue.isAutheticated = false
  }
}

export const authUser = React.createContext();

function App() {
  return (
    <div className="App">
      <authUser.Provider value={authvalue} >
        <Router>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/main/:username1">
              <Main />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

          </Switch>
        </Router>
      </authUser.Provider>
    </div>
  );
}

export default App;
