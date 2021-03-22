import './App.css';
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import ChatBody from "./components/chatBody/ChatBody";
// import ChatList from "./components/chatList/ChatList";
// import UserProfile from "./components/userProfile/UserProfile";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Reset from "./components/login/Reset";


function App() {
  return (
      <div>
          <Router>
              <Route path='/' exact component={Login} />
              <Route path='/Register' exact component={Register} />
              <Route path='/login' exact component={Login} />
              <Route path='/Reset' exact component={Reset} />
          </Router>
      </div>
  );
}

export default App;
