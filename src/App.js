import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header";
import SearchForm from './components/SearchForm';
import Footer from "./components/Footer";

function App() {
  const [names, setNames] = useState([]);

  const people = names ? (
    names.map((character, index) => {
      return <div className="people__outer-container" key={index}>
        <h5 className="people__title">{character.name}</h5>
        <div className="people__inner-container">
        <p className="people__text">Birth year: {character.birth_year} Height: {character.height}cm Gender: {character.gender}</p>
        </div>

      </div>
    })) : "loading..."

  return (
    <div className="app">
      <Header />
      <SearchForm handleData={(results) => {
        setNames(results);
      }} />
      {people}
      <p className="app__subtext">*A person's in-universe standard date of birth (D.O.B) is either BBY or ABY.<br></br>
        Before the Battle of Yavin or After the Battle of Yavin.<br></br>
        The Battle of Yavin occurs at the end of Star Wars episode IV: A New Hope.</p>
      <Footer />
    </div>
  );
}

export default App;
