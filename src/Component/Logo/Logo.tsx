import React from 'react'
import { Link } from "react-router-dom";
import LogoCoder from '../../assets/images/logo/logo.svg'
import "./Logo.css"

function Logo() {
    return (
        <div>
            <Link to="/">
                <img className="logocoder" src={LogoCoder} alt="Coderhouse"/>
            </Link>
        </div>
    )
}

export default Logo
