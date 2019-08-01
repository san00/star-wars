import React, { useState, useEffect } from 'react'
import axios from 'axios';

function CallApi() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(apiRes => {
                console.log(apiRes);
                setNames(apiRes.data.results)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const jedi = names ? (
        names.map((jediName, index) => {
            return <p key={index}>{jediName.name}</p>
        })) : "loading..."
        
    return (
        <div>
            {jedi}
        </div>
    )
}

export default CallApi