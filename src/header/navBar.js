import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
// <NavLink to="/about">About</NavLink>

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="../src/images/runinc_logo.svg" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link active"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item nav-link"><NavLink to="/event">Event</NavLink></li>
                    <li className="nav-item nav-link"><NavLink to="/shop">Shop</NavLink></li>
                    <li className="nav-item nav-link"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
            )
        }
        
export default withRouter(Navbar)