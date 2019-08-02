import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header";
import SearchForm from './components/SearchForm';
import Footer from "./components/Footer";

function App() {
  const [names, setNames] = useState([]);

  const person = names ? (
    names.map((personName, index) => {
      return <p className="app__maintext" key={index}>{personName.name}, born {personName.birth_year}</p>
    })) : "loading..."

  return (
    <div className="app">
      <Header />
      <SearchForm onDataRecieved={(results) => {
        setNames(results);
      }} />
      {person}
      <p className="app__subtext">*A person's in-universe standard date of birth (D.O.B) is either BBY or ABY.<br></br>
        Before the Battle of Yavin or After the Battle of Yavin.<br></br>
        The Battle of Yavin occurs at the end of Star Wars episode IV: A New Hope.</p>
      <Footer />
    </div>
  );
}

export default App;
