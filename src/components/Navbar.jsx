import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/bollywood', label: 'Bollywood' },
    { to: '/hollywood', label: 'Hollywood' },
    { to: '/food', label: 'Food' },
    { to: '/fitness', label: 'Fitness' },
    { to: '/technology', label: 'Technology' },
]

const Navbar = () => {
    return (
        <nav className="blog-navbar" aria-label="Primary">
            <div className="blog-navbar__list">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                            `blog-navbar__link${isActive ? ' blog-navbar__link--active' : ''}`
                        }
                    >
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Navbar