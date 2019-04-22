import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './splash.css';

const Splash = () => {
    return (
        <>
            <nav id="navStyle" className="navbar navbar-expand-lg navbar-dark bg-dark.bg-transparent">
                <Link className="navbar-brand" to="/">
                    Night Beat
      </Link>
            </nav>

            <header>
                <h1>This is The Header</h1>
            </header>

            <div align="center">
                <div className='some-page-wrapper'>
                    <div className='row'>
                        <div className='col-md-12'>
                            Pic of Bot
                        </div>
                    </div>
                </div>
            </div>

            <div align="center">
                <div>
                    <button>button</button>
                </div>


            <div align="center">
                <div className='supported-sites-wrapper'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Supported Sites</h2>
                        </div>
                    </div>
                </div>
            </div>

                <div className="footer-btm-bar">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='black-column'>
                                footer</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Splash;
