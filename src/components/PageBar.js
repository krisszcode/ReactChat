import React from 'react'
import { Link } from 'react-router-dom';

const PageBar = () => {
    return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand">Chatapp</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="chat" className="nav-link" >Chatapp</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default PageBar

