import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return(
        <div className="notfound">
            <p>The page you are looking doesnot exist. Do you want to go to home page.</p>
            <button className="button"><Link to="/">Go To Home Page</Link></button>
        </div>

    )
}

export default NotFound