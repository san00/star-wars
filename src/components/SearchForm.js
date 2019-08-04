import React, { useState } from 'react'
import axios from 'axios';

function SearchForm(props) {
    const [value, setValue] = useState("");

    const requestData = async (e) => {
        e.preventDefault();
        try {
            const apiRes = await axios
                .get(`https://swapi.co/api/people/?search=${value}`);
            props.handleData(apiRes.data.results);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className="form">
                <label className="form__label" htmlFor="form__input">Search for a person</label>
                <input className="form__input" type="text" onChange={e => { setValue(e.target.value) }} placeholder="Enter name..." ></input>
                <input className="form__input-submit" type="submit" onClick={e => requestData(e)} ></input>
            </form>
        </div>
    )
}

export default SearchForm