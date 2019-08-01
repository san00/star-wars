import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header";
import SearchForm from './components/SearchForm';

function App() {
  const [names, setNames] = useState([]);

  const person = names ? (
    names.map((personName, index) => {
      return <p key={index}>{personName.name}, born {personName.birth_year}</p>
    })) : "loading..."

  return (
    <div className="App">
      <Header />
      {person} 
      <SearchForm onDataRecieved={(results) => {
        setNames(results);
      }} />
      <p>A person's in-universe standard date of birth (D.O.B) is either BBY or ABY.<br></br>
      Before the Battle of Yavin or After the Battle of Yavin.<br></br>
      The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.</p>
    </div>
  );
}

export default App;
