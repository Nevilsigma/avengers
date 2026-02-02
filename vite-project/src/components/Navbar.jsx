import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-group left">
        <li>Accueil</li>
        <li>Personnages</li>
        <li>Films</li>
      </ul>

      <div className="logo">
        <img src='./images/logo.png' alt="Logo Avengers" />
      </div>

      <ul className="nav-group right">
        <li>Séries</li>
        <li>Comics</li>
        <li>Boutique</li>
      </ul>
    </nav>
  )
}

export default Navbar
