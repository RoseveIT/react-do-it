import './App.css'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import React from "react";

function App() {
  return (
      <div className='add-wrapper'>
          <Header/>
          <Navbar/>
          <Profile/>
      </div>
  );
}

export default App;
