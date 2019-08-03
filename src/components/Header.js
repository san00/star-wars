import React from 'react'
import StormTroopers from "./images/storm-troopers.jpg";

function Header() {
    return (
        <div className="header">
            <h2 className="header__title" >Star Wars</h2>
            <p className="header__text">May the force be with you</p>
            <img className="header__image" src={StormTroopers} alt="lego star wars figures"></img>
        </div>
    )
}

export default Header

