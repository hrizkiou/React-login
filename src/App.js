import './App.css';
import React, { useState } from "react";
// import ChatBody from "./components/chatBody/ChatBody";
// import ChatList from "./components/chatList/ChatList";
// import UserProfile from "./components/userProfile/UserProfile";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Reset from "./components/login/Reset";


function App() {
    const [theme, setTheme] = useState('dark');
  return (
      <div>
          <Login />
          {/*<Register />*/}
          <Reset />
      </div>
  );
}

export default App;
