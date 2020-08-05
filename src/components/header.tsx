import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/setting">Settings</Link>
                </li>
            </ul>
        </nav>
    )
}
