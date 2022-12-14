import React from 'react';
import {Link} from 'react-router-dom';

function HeaderBar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <a className="navbar-brand" href="#">React Fundamental</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/namelist">Show Name List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/comment">Show Comments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/phonebook">Phone Book</Link>
                    </li>
                </ul>
            </div>
            </nav>
    )
}

export default HeaderBar;