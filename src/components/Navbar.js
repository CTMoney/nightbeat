import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Tasks</a>
                <a className="nav-item nav-link" href="#">Proxies</a>
                <a className="nav-item nav-link" href="#">Shops</a>
                <a className="nav-item nav-link" href="#">Account Settings</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;