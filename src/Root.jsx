import React from 'react';
import { Link } from 'react-router-dom';
import './styles/root.css'
import logo from '/public/svg/logo.svg';
import arrow from '/public/svg/arrow.svg';
import star1 from '/public/svg/stars.svg';
import star2 from '/public/svg/stars-2.svg';
import waveTop from '/public/svg/wave-top.svg';
import waveBottom from '/public/svg/wave-bot.svg';
import yellowFlower from '/public/svg/yellow-flower.svg';
import whiteArrow from '/public/images/white-arrow.png';
import Navbar from "./components/NavBar"

const Root = () => {
    return (
        <>
            <header>
                <div className="main-heading">
                    <div className="nav">
                        <Navbar />
                    </div>
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                        </div>
                    </Link>
                </div>
            
                <div className="landing">
                    <div className="contain-1">
                        <div className="svg-container">
                            <img className="star-1" src={star1} alt="" />
                        </div>
                    
                        <div className="heading">
                            <h1>
                                WELCOME! <br />
                                YOUR BIG DAY BESTIE IS HERE TO HELP <br />
                                WITH YOUR EVENT + WEDDING <br />
                                PLANNING NEEDS!
                            </h1>
                        </div>

                        <div className="svg-container">
                            <img className="star-2" src={star2} alt="" height="30rem" />
                        </div>
        
                        <div className="location">
                            <p>Local to San Diego, CA</p>
                            <p>Serving Southern CA + Destination Weddings</p>
                        </div>
                    </div>

                    <div className="hidden-img"></div>
                </div>
            </header>

            <main>
                <div className="background">
                    <div className="wave-top">
                        <img src={waveTop} alt="" />
                    </div>
                    <div className="container-1">
                        <div>
                            <img className="main-img" src="images/table-img-1.JPEG" alt="" />
                        </div>
                        <div className="container-1-right-contents">
                            <h2>LET’S PLAN YOUR BEST EVENT YET!</h2>
                            <p className="description1">
                                Are you planning a local or destination wedding, elopement, bridal shower, birthday, bach party or event and don’t know where to start? Look no further, because your Big Day Bestie is here to help!
                            </p>
        
                            <Link to="about">
                                <div className="btn-contain meet">
                                    <button className="btn-flex">Meet the Event Planner
                                        <img src={arrow} alt="" width="14px" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wave-bot">
                        <img src={waveBottom} alt="" />
                    </div>
                </div>

                <div className="container-3">
                    <div className="preview-gallery">
                        <img className="img-card" src="images/gallery-1.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-2.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-3.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-4.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-5.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-6.JPG" alt="" height="160px" width="130px" />
                        <img className="img-card" src="images/gallery-7.JPEG" alt="" />
                        <img className="img-card" src="images/gallery-8.JPEG" alt="" />
                    </div>
                </div>

                <Link to="/gallery">
                    <div className="gallery-btn btn-contain">
                        <button className="gallery-btn btn-flex">
                            <span>Visit Gallery
                                <img src={arrow} alt="" width="18px" />
                            </span>
                        </button>
                    </div>
                </Link>

                <div className="pricing-container">
                    <div className="background-contain">
                        <h2 className="pricing-h2">PACKAGES & PRICING</h2>
                        <img src={yellowFlower} alt="flower" width="100px" className="center flower" />
                        <div className="contain-2">
                            <h3 className="wedding cone">Wedding Planning</h3>
                            <img src="/svg/hearts-row.svg" alt="flower" className="center" />
                            <div className="planning-container">
                                <div className="planning cone">
                                    <h3>Partial Planning</h3>
                                </div>
                                <div className="coordination cone">
                                    <h3>Day of Coordination</h3>
                                </div>
                            </div>
                        </div>
        
                        <Link to="/packages">
                            <div className="pricing-btn btn-contain">
                                <button className="btn-flex">
                                    See Pricing + Packages Here
                                    <img src={whiteArrow} alt="" width="14px" style={{ paddingLeft: "2px" }} />
                                </button>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="contain-test">
                        <div className="wave-bot-2">
                            <img src={waveBottom} alt="" />
                        </div>
                        <div className="contact-us">
                            <h3 className="contact-header">Contact Us!</h3>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Root;