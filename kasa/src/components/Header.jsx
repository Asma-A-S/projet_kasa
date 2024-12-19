import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/LOGO.png"
import "../styles/Header.scss"
function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo" className="logo"/>
            <nav className="navbar">
                <Link to="/" className="navbar-item">Accueil</Link>
                <Link to="/About" className="navbar-item">A propos</Link>
            </nav>
        </div>
    )
}
export default Header