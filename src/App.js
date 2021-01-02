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

const authvalue = {
  username: "ex",
  isAutheticated: false,
  signin(params) {
    authvalue.username = params;
    authvalue.isAutheticated = true
    console.log("signin",authvalue.username);
  },
  signout() {
    authvalue.username = null
    authvalue.isAutheticated = false
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

            <Route path="/main">
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
