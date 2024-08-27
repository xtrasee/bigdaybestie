import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../styles/contact.css'
import Navbar from "../components/NavBar";
import logo from '/svg/logo.svg';
import whiteArrow from '/public/images/white-arrow.png';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    return (
        <>
            <header>
                <div className="navbar"  style={{paddingBottom: '6rem'}}>
                    <div className="nav">
                        <Navbar />
                    </div>
                    <Link to="/">
                        <div className="logo-container">
                            <img className="logo" src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                        </div>
                    </Link>
                </div>
            </header>

            <main>
                <div className="contact-container">
                    <div className="form" id="contact-form">
                        <form action="../../PHP/server.php" method='POST' id="contactForm">
                            <label htmlFor="name">Full Name *</label>
                            <input type="text" id="name" name="name" placeholder="Your full name here" className="input" required/>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" placeholder="E.g. myemail@email.com" className="input" required/>
                            <label htmlFor="number">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" placeholder="E.g. 555 123 4567" className="input" required/>
                            <label htmlFor="cb">Preferred Method of Communication</label>
                            <div className="checkbox">
                                <div style={{marginTop: '0.5rem;'}}>
                                    <input id="cb" type="checkbox" name="preferred_communication[]" value="Text"/>
                                    <p>Text</p>
                                </div>
                                <div>
                                    <input id="cb" type="checkbox" name="preferred_communication[]" value="Email"/>
                                    <p>Email</p>
                                </div>
                                <div>
                                    <input id="cb" type="checkbox" name="preferred_communication[]" value="Phone"/>
                                    <p>Phone Call</p>
                                </div>
                            </div>
                            <label htmlFor="date">Event Date *</label>
                            <input type="date" name="date" id="event-date" className="input" required/>
                            <label htmlFor="cb">Is this date flexible</label>
                            <div className="checkbox">
                                <div style={{marginTop: '0.5rem;'}}>
                                    <input id="cb" type="checkbox" name="date_flexible" value="Yes"/>
                                    <p>Yes</p>
                                </div>
                                <div>
                                    <input id="cb" type="checkbox" name="date_flexible" value="No"/>
                                    <p>No</p>
                                </div>
                            </div>
                            <label htmlFor="address">Address for Event (if Known)</label>
                            <input type="text" id="address" name="address" placeholder="E.g. 123 Wed St. San Diego, CA 92111" className="input"/>
                            <label htmlFor="type">What type of event are you planning? *</label>
                            <select name="type" id="type">
                                <option value="">Select an option</option>
                                <option value="wedding">Wedding</option>
                                <option value="party">Private Party</option>
                            </select>
                            <label htmlFor="guest-count">Est. Guest Count</label>
                            <input type="number" name="count" id="count" placeholder="E.g. 100" className="input" required/>
                            <label htmlFor="budget">Est. Total Budget</label>
                            <input type="number" name="budget" id="count" placeholder="E.g. $1000" className="input" required/>
                            <label htmlFor="hear">How did you hear about us?</label>
                            <select name="hear" id="hear">
                                <option value="">Select an option</option>
                                <option value="internet">Internt Search</option>
                                <option value="friend">Family or Friend Referral</option>
                                <option value="social-media">Social Media</option>
                            </select>
                            <label htmlFor="social">Social Media Accounts (if you have it)!</label>
                            <input type="text" name="social" id="social" placeholder="@" className="input"/>
                            <label htmlFor="info">I'd love to hear more!</label>
                            <textarea name="info" id="info" cols="20" rows="5" placeholder="Please include any other event details here!"></textarea>
                            <div className="form-btn">
                                <div className="form-btn btn-contain">
                                    <button className="btn-flex" style={{ padding: '0.25rem 2.5rem;' }}>Submit
                                        <img src={ whiteArrow } alt="" width="18px" style={{ paddingLeft: '7px;' }} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;