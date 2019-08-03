import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header";
import SearchForm from './components/SearchForm';
import Footer from "./components/Footer";

function App() {
  const [names, setNames] = useState([]);

  const person = names ? (
    names.map((personName, index) => {
      return <div className="people__outer-container">
        <h5 className="people__title" key={index}>{personName.name}</h5>
        <div className="people__inner-container">
          <p className="people__text">Birth year: {personName.birth_year}</p>
          <p className="people__text">Height: {personName.height}cm </p>
          <p className="people__text">Gender: {personName.gender}</p>
        </div>

      </div>
    })) : "loading..."

  return (
    <div className="app">
      <Header />
      {person}
      <SearchForm onDataRecieved={(results) => {
        setNames(results);
      }} />

      <p className="app__subtext">*A person's in-universe standard date of birth (D.O.B) is either BBY or ABY.<br></br>
        Before the Battle of Yavin or After the Battle of Yavin.<br></br>
        The Battle of Yavin occurs at the end of Star Wars episode IV: A New Hope.</p>
      <Footer />
    </div>
  );
}

export default App;
