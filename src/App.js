import React, { useState} from 'react';
import './App.scss';
import CallApi from "./components/CallApi";
import Header from "./components/Header";


function App() {
  
  return (
    <div className="App">
      <Header/>
      <CallApi/>
    </div>
  );
}

export default App;
