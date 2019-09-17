import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import logo from '../images/runinc_logo.svg'
// <NavLink to="/about">About</NavLink>

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand font-weight-bold text-danger" href="#"><img src="" alt="" />RUN<span className="text-dark">INC</span></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link active"><NavLink className="text-dark" to="/">Home</NavLink></li>
                    <li className="nav-item nav-link"><NavLink className="text-dark" to="/event">Event</NavLink></li>
                    <li className="nav-item nav-link"><NavLink className="text-dark" to="/shop">Shop</NavLink></li>
                    <li className="nav-item nav-link"><NavLink className="text-dark" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <form className="form-inline">
                <input className="bg-warning text-white border border-dark" type="search" aria-label="Search"/>
                <button className="btn btn-outline-light bg-dark text-white" type="submit">Search</button>
            </form>
        </nav>
            )
        }
        
export default withRouter(Navbar)