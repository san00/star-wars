import React, { useState } from 'react'
import axios from 'axios';

function SearchForm(props) {
    const [value, setValue] = useState("");
    return (
        <div>
            <form  >
            <label htmlFor="input">Search for a person</label>
                <input type="text" onChange={e => { setValue(e.target.value) }} placeholder="Enter name..." ></input>
                <input type="submit" onClick={(e) => {
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