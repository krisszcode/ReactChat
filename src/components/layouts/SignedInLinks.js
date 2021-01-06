import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Log out</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">NN</Link>
            </li>
        </ul>
    )
}

export default SignedInLinks
