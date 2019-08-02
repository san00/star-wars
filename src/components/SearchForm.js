import React, { useState } from 'react'
import axios from 'axios';

function SearchForm(props) {
    const [value, setValue] = useState("");
    return (
        <div>
            <form className="form">
            <label className="form__label" htmlFor="form__input">Search for a person</label>
                <input className="form__input" type="text" onChange={e => { setValue(e.target.value) }} placeholder="Enter name..." ></input>
                <input className="form__input-submit" type="submit" onClick={(e) => {
                    e.preventDefault();
                    axios
                        .get(`https://swapi.co/api/people/?search=${value}`)
                        .then(apiRes => {
                            props.onDataRecieved(apiRes.data.results)
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }} ></input>
            </form>
        </div>
    )
}

export default SearchForm