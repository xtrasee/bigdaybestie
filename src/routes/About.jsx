import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css'
import Navbar from "../components/NavBar";
import logo from '/svg/logo.svg';
import profile from '/images/profile-pic.JPG'
import waveTop from '/svg/wave-top.svg';
import whiteArrow from '/images/white-arrow.png';

const About = () => {
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
                <div className="about-container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                        </div>
                    </Link>
                    
                    <div className="about" id="about">
                        <div className="about-header">
                            <img className="profile" src={profile} alt="" />
                            <h3>Hi, i'm Jenn!</h3>
                        </div>
                        <div className="wave-top-2">
                            <img src={waveTop} alt="" />
                        </div>
                        <div className="about-content">
                            <p>I’m a Southern CA and destination wedding
                                planner. Helping couples during one of the most
                                important events in their journey together, brings
                                me so much joy and I’m excited to take the stress
                                off of planning such a big day!
                                <br />
                                <br />
                                I have a background in graphic design, marketing
                                and event planning since a young age (middle
                                school)! Since then, i’ve planned numerous local
                                and destination weddings, events and managed
                                social media accounts. As a Vietnamese
                                American, I have had the pleasure of planning
                                Tea Ceremonies as well. 
                                <br />
                                <br />
                                I can’t wait to meet you and bring your unique
                                vision to life! From full service planning, content
                                creation or even custom designs, I would love to
                                help where I can. Let’s grab a coffee and discuss
                                                your perfect day!
                            </p>
                
                            <Link to="contact">
                                <div className="contact-btn btn-contain">
                                        <button className="btn-flex"> Get In Touch!
                                            <img src={whiteArrow} alt="" width="14px" style={{ paddingLeft: '2px;' }} />
                                        </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;