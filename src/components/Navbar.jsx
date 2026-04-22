import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div><Link to="/">Home</Link>
            <Link to="/Bollywood">Bollywood</Link>
            <Link to="/Hollywood">Hollywood</Link>
            <Link to="/Food">Food</Link>
            <Link to="/Fitness">Fitness</Link>
            <Link to="/Technology">Technology</Link>
        </div>
    )
}

export default Navbar