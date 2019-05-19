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
                <a href="https://twitter.com/nightbeat_io" className="fa fa-twitter" id="twitTop" />
            </nav>

            <header>
                <h1>Product Preveiw</h1>
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
                    <a href="/register"><button>Click to Purchase</button></a>
                </div>

                <div align="center">
                    <div className='alpha-beta-success'>
                        <div className='row'>
                            <div className='col-md-12'>
                                alpha beta success
                        </div>
                        </div>
                    </div>
                </div>

                <div align="center" className="container-fluid">
                    <div className='product-preview'>

                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://picsum.photos/200" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/200" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/200" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div align='center'>
                    <div className='supported-sites'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>Supported Sites</h2>

                                <div className='shopify-container'>
                                    <h3> Shopify</h3>

                                    <div className="list-1">
                                        <ul>
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Milk</li>
                                        </ul>
                                    </div>


                                    <div className="list-2">
                                        <ul>
                                            <li>Coffee</li>
                                            <li>Tea</li>
                                            <li>Milk</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='more-container'>
                                    <h3>More to Come</h3>

                                    <div className="list">
                                        <ul>
                                            <li>fsdfsd sdf fsdsf fsd fdsdfs fds</li>
                                            <li>fdsfsdsdfsdf dfs fsd fsd fds fds fds</li>
                                            <li>fdsfsd dfs fds fd ds dfs dsf dsf dsfd</li>
                                        </ul>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>


                <div align="center">
                    <div className='contact-us'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-btm-bar">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='black-column'>
                                footer</div>
                            <a href="https://twitter.com/nightbeat_io" className="fa fa-twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Splash;


