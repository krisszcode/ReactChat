import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Chatapp</Link>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="chat" className="nav-link" >Chatapp</Link>
                        </li>
                    </ul>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </nav>
    )
}

export default Navbar

