import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">{props.logo}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* Releases */}
                    <li className="nav-item active">
                        <Link to='/releases' className="nav-link">Releases</Link>
                    </li>
                    {/* Backlog */}
                    <li className="nav-item">
                        <Link to='/backlog' className="nav-link">Backlog</Link>
                    </li>
                    {/* Sprints */}
                    <li className="nav-item">
                        <Link to='/sprints' className="nav-link">Sprints</Link>
                    </li>
                    {/* Menu Dropdown */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;