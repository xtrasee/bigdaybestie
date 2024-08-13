import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/packages.css'
import Navbar from "../components/NavBar";
import logo from '/svg/logo.svg';
import star3 from '../../public/svg/stars-3.svg';
import arrow from '/svg/arrow.svg';
import waveTop from '/svg/wave-top.svg';
import waveBot from '/svg/wave-bot.svg';
import flower from '../../public/svg/flower.svg';
import hearts from '../../public/svg/hearts.svg';
import rings from '../../public/svg/rings.svg';

const Packages = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav">
                        <Navbar />
                    </div>
                </div>
            </header>

            <main>
                <div className="packages-container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                        </div>
                    </Link>
                    
                    <div className="packages" id="pricing">
                        <h2 className="pricing-h2">PACKAGES & PRICING</h2>
            
                        <div className="desktop-ver">
                            <div className="left">
                                <div className="svgs-container">
                                    <svg className="curved" viewBox="0 100 500 120" width="500" height="120">
                                        <path id="curve" fill="transparent" d="M100,200 Q250,100 400,200"/>
                                        <text text-anchor="start" width="600">
                                        <textPath xlinkHref="#curve" className="curved-letters">
                                            Full Service Planning
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div className="svg2-container">
                                    <img className="star-3" src= {star3} alt="" />
                                </div>
            
                                <div className="description2">
                                    <p>The Full Service Wedding Planning Package ensures that
                                        everything will be seamlessly planned and executed from start
                                        to finish. We will be there every step of the way, including on
                                        the day of, to make sure your vision comes to life!
                                    </p>
                                </div>
            
                                <div className="desk-btn">
                                    <Link to ="/contact">
                                        <div className="btn-contain">
                                            <button className="btn btn-flex">Inquire Here<img src={arrow} alt="" width="14px" /></button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                
                            <div className="right">
                                <h4>Includes</h4>
                                <ul className="services">
                                    <li>Booking Venue(s)</li>
                                    <li>Booking Vendors</li>
                                    <li>Wedding Timeline</li>
                                    <li>Ceremony Planning</li>
                                    <li>Reception Planning</li>
                                    <li>Day-Of Coordination</li>
                                    <li>Decor/Design</li>
                                    <li>Design Curation</li>
                                    <li>Rehearsal Ceremony</li>
                                    <li>Planning Meetings</li>
                                    <li>Day-Of Content Creation</li>
                                </ul>
                            </div>
                        </div>
            
                        <div className="center-btn">
                            <Link to="/contact">
                                <div className="btn-contain">
                                    <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px" /></button>
                                </div>
                            </Link>
                        </div>
                    </div>
            
                    <div className="partial-planning">
                        <div className="desktop-ver">
                            <div className="left">
                                <div className="wave-top wave-three"><img src={waveTop} alt="" /></div>
                                <div className="svgs-container">
                                    <img src="" alt=""/>
                                    <svg className="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200 Q250,100 400,200"/>
                                        <text text-anchor="start" width="600">
                                        <textPath xlinkHref="#curve" className="curved-letters" startOffset="10%">
                                            Partial Planning
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="svg3-container">
                                    <img className="flower" src={flower} alt="" />
                                </div>

                                <div className="description2">
                                    <p>If you’ve already started the process on your own and need
                                        help the rest of the way, the Partial Planning Package might be
                                        the perfect solution! I’ll be there on the day-of so you can relax
                                        knowing your big day bestie is there to have your back!</p>
                                </div>
            
                                <div className="desk-btn">
                                    <Link to="/contact">
                                        <div className="btn-contain">
                                            <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={ arrow } alt="" width="14px" /></button>
                                        </div>
                                    </Link>
                                </div>
                                <div className="wave-bot-3"><img src={ waveBot } alt="" /></div>
                            </div>
                            
                            <div className="listing">
                                <h4>Includes</h4>
                                <ul className="services">
                                    <li>Vendor Recommendations</li>
                                    <li>Vendor Management</li>
                                    <li>Wedding Timeline</li>
                                    <li>Ceremony Planning</li>
                                    <li>Rehearsal Ceremony</li>
                                    <li>Reception Planning</li>
                                    <li>Day-Of Coordination</li>
                                    <li>Decor/Design</li>
                                    <li>Partial Planning Meetings</li>
                                    <li>Day-Of Content Creation</li>
                                </ul>
                            </div>
                        </div>
                    
            
                        <div className="center-btn">
                            <Link to="/contact">
                                <div className="btn-contain">
                                    <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px" /></button>
                                </div>
                            </Link>
                        </div>
                    </div>
            
                    <div className="day-of-cord">
                        <div className="desktop-ver">
                            <div className="left">
                                <div className="svgs-container">
                                    <svg className="curved" viewBox="0 100 500 120" width="500" height="120">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlinkHref="#curve" className="curved-letters" startOffset="12px">
                                            Day of Coordination
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div className="svg2-container">
                                    <img className="star-3" src={hearts} alt="" />
                                </div>

                                <div className="description2">
                                    <p>As your big day bestie, i’ll jump in to help during the week of
                                        your wedding and make sure everything runs smoothly the day
                                        of! I’ll be there that day to take care of all the little details so
                                        you can just enjoy your day together!</p>
                                </div>
            
                                <div className="desk-btn">
                                    <Link to="/contact">
                                        <div className="btn-contain">
                                            <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px"/></button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
            
                            <div className="listing">
                                <h4>Includes</h4>
                                <ul className="services">
                                    <li>Vendor Recommendations</li>
                                    <li>Wedding Timeline</li>
                                    <li>Rehearsal Ceremony</li>
                                    <li>Ceremony Execution</li>
                                    <li>Wedding Set Up/Break Down</li>
                                    <li>Reception Execution</li>
                                    <li>Day-Of Content Creation</li>
                                    <li>Event Logistics</li>
                                </ul>
                            </div>
                        </div>
            
                        <div className="center-btn">
                            <Link to="/contact">
                                <div className="btn-contain">
                                    <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px"/></button>
                                </div>
                            </Link>
                        </div>
                    </div>
            
                    <div className="other-services">
                        <div className="wave-top-4"><img src={waveTop} alt="" /></div>
                        <h2 style={{fontSize: '1.5rem'}}>OTHER SERVICES</h2>
                        <div className="desktop-ver">
                            <div className="left">
                                <div className="svgs-container">
                                    <svg className="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlinkHref="#curve" className="curved-letters sm">
                                            Day of Content Creation
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div className="svg3-container">
                                    <img className="star-3" src={rings} alt="" />
                                </div>

                                <div className="description2">
                                    <p>As your Day Of Content Creator, I can post stories, reels and images in real time for those loved ones who couldn’t make it to the event! Waiting for your professional images and video can take forever, so I capture memories you and your spouse can look back at as soon as the day is over!</p>
                                </div>
                            </div>
                            <div className="listing">
                                <h4>Includes</h4>
                                <ul className="services">
                                    <li>Unlimited Photos/Videos</li>
                                    <li>Unlimited Stories</li>
                                    <li>2-3 Posts</li>
                                    <li>2 Curated Reels (Edited Videos)</li>
                                </ul>
                                <div className="desk-btn">
                                    <Link to="/contact">
                                        <div className="btn-contain">
                                            <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px"/></button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
            
                        <div className="desktop-ver">
                            <div className="left">
                                <div className="svgs-container">
                                    <svg className="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlinkHref="#curve" className="curved-letters sm" startOffset="10%">
                                            Customized Designs
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div className="svg3-container">
                                    <img className="star-3" src={star3} alt="" />
                                </div>

                                <div className="description2">
                                    <p>Have a specific wedding invitation, save the date, or wedding
                                        sign/stationary in mind and don’t know how to bring it to life?
                                        Let me help custom design your vision! From passport invites
                                        for a destination wedding to handheld fans with your wedding
                                        timeline, I can help create your out of the box ideas!</p>
                                </div>
                            </div>
                            <div className="listing">
                                <h4>a la carte</h4>
                                <ul className="services">
                                    <li>Custom Design</li>
                                    <li>Print And Deliver</li>
                                    <li>DIY Your Vision To Life</li>
                                    <li>(Source + Put Together Materials)</li>
                                </ul>
            
                                <div className="desk-btn">
                                    <Link to="/contact">
                                        <div className="btn-contain">
                                            <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px"/></button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
            
                        <div className="center-btn">
                            <Link to="/contact">
                                <div className="btn-contain">
                                    <button className="btn btn-flex" style={{ marginBottom: '1rem' }}>Inquire Here <img src={arrow} alt="" width="14px"/></button>
                                </div>
                            </Link>
                        </div>
            
                        <div className="events">
                            <div className="svgs-container">
                                <svg className="curved" viewBox="0 100 500 95" width="500" height="95">
                                    <path id="curve" fill="transparent" d="M100,200
                                    Q250,100 400,200"/>
                                    <text text-anchor="start"width="600">
                                    <textPath xlinkHref="#curve" className="curved-letters sm" startOffset="9px">
                                        Other Events In Mind?
                                    </textPath>
                                    </text>
                                </svg>
                            </div>
            
                            <div className="svg4-container">
                                <img className="flower" src={flower} alt="" />
                            </div>
                            <h4 style={{fontSize: '0.8rem'}}>Contact Us Here</h4>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Packages;