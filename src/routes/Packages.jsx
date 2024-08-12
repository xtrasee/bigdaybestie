import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/NavBar";

const Packages = () => {
    return (
        <>
            <header>
                <div class="nav-bar">
                    <div id="myNav" class="overlay">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <div class="overlay-content">
                            <a href="/index.html">
                                <div class="logo"><img src="img/logo.svg" alt="" height="140px" style="margin-bottom: 2rem;"></div>
                            </a>
                            <a href="/about.html"><h2>ABOUT ME</h2></a>
                            <a href="/packages.html"><h2>PACKAGES & PRICING</h2></a>
                            <a href="/gallery.html"><h2>GALLERY</h2></a>
                            <a href="/contact.html"><h2>CONTACT US</h2></a>
                
                            <a href="/contact.html">
                                <div class="final-btn">
                                    <button class="final-btn btn-flex">
                                        <span>Inquire Here<img src="/img/arrow.svg" alt="" width="18px"></span>
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="mobile-menu">
                        <span style="font-size:30px;cursor:pointer;" onclick="openNav()">&#9776;</span>
                    </div>
                    
                </div>
            </header>

            <main>
            </main>
                <div class="packages-container">
                    <a href="/index.html">
                        <div class="logo"><img src="img/logo.svg" alt="" height="200px"></div>
                    </a>
                    
                    <div class="packages" id="pricing">
                        <h2 class="pricing-h2">PACKAGES & PRICING</h2>
            
                        <div class="desktop-ver">
                            <div class="left">
                                <div class="svgs-container">
                                    <svg class="curved" viewBox="0 100 500 120" width="500" height="120">
                                        <path id="curve" fill="transparent" d="M100,200 Q250,100 400,200"/>
                                        <text text-anchor="start" width="600">
                                        <textPath xlink:href="#curve" class="curved-letters">
                                            Full Service Planning
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div class="svg2-container">
                                    <img class="star-3" src="img/stars-2.svg" alt="">
                                </div>
            
                                <!-- insert star svg -->
                                <div class="description2">
                                    <p>The Full Service Wedding Planning Package ensures that
                                        everything will be seamlessly planned and executed from start
                                        to finish. We will be there every step of the way, including on
                                        the day of, to make sure your vision comes to life!</p>
                                </div>
            
                                <div class="desk-btn">
                                    <a href="/contact.html">
                                        <div class="btn-contain">
                                            <button class="btn btn-flex">Inquire Here<img src="/img/arrow.svg" alt="" width="14px"></button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                
                            <div class="right">
                                <h4>Includes</h4>
                                <ul class="services">
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
            
                        <div class="center-btn">
                            <a href="/contact.html">
                                <div class="btn-contain">
                                    <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                </div>
                            </a>
                        </div>
                    </div>
            
                    <div class="partial-planning">
                        <div class="desktop-ver">
                            <div class="left">
                                <div class="wave-top wave-three"><img src="img/wave-top.svg" alt=""></div>
                                <div class="svgs-container">
                                    <img src="" alt="">
                                    <svg class="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200 Q250,100 400,200"/>
                                        <text text-anchor="start" width="600">
                                        <textPath xlink:href="#curve" class="curved-letters" startOffset="10%">
                                            Partial Planning
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div class="svg3-container">
                                    <img class="flower" src="img/flower.svg" alt="">
                                </div>
                                <!-- insert flower svg -->
                                <div class="description2">
                                    <p>If you’ve already started the process on your own and need
                                        help the rest of the way, the Partial Planning Package might be
                                        the perfect solution! I’ll be there on the day-of so you can relax
                                        knowing your big day bestie is there to have your back!</p>
                                </div>
            
                                <div class="desk-btn">
                                    <a href="/contact.html">
                                        <div class="btn-contain">
                                            <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                        </div>
                                    </a>
                                </div>
                                <div class="wave-bot-3"><img src="img/wave-bot.svg" alt=""></div>
                            </div>
                
                            <div class="listing">
                                <h4>Includes</h4>
                                <ul class="services">
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
                    
            
                        <div class="center-btn">
                            <a href="/contact.html">
                                <div class="btn-contain">
                                    <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                </div>
                            </a>
                        </div>
                    </div>
            
                    <div class="day-of-cord">
                        <div class="desktop-ver">
                            <div class="left">
                                <div class="svgs-container">
                                    <svg class="curved" viewBox="0 100 500 120" width="500" height="120">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlink:href="#curve" class="curved-letters" startOffset="12px">
                                            Day of Coordination
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div class="svg2-container">
                                    <img class="star-3" src="img/hearts.svg" alt="">
                                </div>
                                <!-- insert heart svg -->
                                <div class="description2">
                                    <p>As your big day bestie, i’ll jump in to help during the week of
                                        your wedding and make sure everything runs smoothly the day
                                        of! I’ll be there that day to take care of all the little details so
                                        you can just enjoy your day together!</p>
                                </div>
            
                                <div class="desk-btn">
                                    <a href="/contact.html">
                                        <div class="btn-contain">
                                            <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                        </div>
                                    </a>
                                </div>
                            </div>
            
                            <div class="listing">
                                <h4>Includes</h4>
                                <ul class="services">
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
            
                        <div class="center-btn">
                            <a href="/contact.html">
                                <div class="btn-contain">
                                    <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                </div>
                            </a>
                        </div>
                    </div>
            
                    <div class="other-services">
                        <div class="wave-top-4"><img src="img/wave-top.svg" alt=""></div>
                        <h2 style="font-size: 1.5rem;">OTHER SERVICES</h2>
                        <div class="desktop-ver">
                            <div class="left">
                                <div class="svgs-container">
                                    <svg class="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlink:href="#curve" class="curved-letters sm">
                                            Day of Content Creation
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div class="svg3-container">
                                    <img class="star-3" src="img/rings.svg" alt="">
                                </div>
                                <!-- insert svg -->
                                <div class="description2">
                                    <p>As your Day Of Content Creator, I can post stories, reels and images in real time for those loved ones who couldn’t make it to the event! Waiting for your professional images and video can take forever, so I capture memories you and your spouse can look back at as soon as the day is over!</p>
                                </div>
                            </div>
                            <div class="listing">
                                <h4>Includes</h4>
                                <ul class="services">
                                    <li>Unlimited Photos/Videos</li>
                                    <li>Unlimited Stories</li>
                                    <li>2-3 Posts</li>
                                    <li>2 Curated Reels (Edited Videos)</li>
                                </ul>
                                <div class="desk-btn">
                                    <a href="/contact.html">
                                        <div class="btn-contain">
                                            <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                        <div class="desktop-ver">
                            <div class="left">
                                <div class="svgs-container">
                                    <svg class="curved" viewBox="0 100 500 100" width="500" height="100">
                                        <path id="curve" fill="transparent" d="M100,200
                                        Q250,100 400,200"/>
                                        <text text-anchor="start"width="600">
                                        <textPath xlink:href="#curve" class="curved-letters sm" startOffset="10%">
                                            Customized Designs
                                        </textPath>
                                        </text>
                                    </svg>
                                </div>
            
                                <div class="svg3-container">
                                    <img class="star-3" src="img/stars-3.svg" alt="">
                                </div>
                                <!-- insert svg -->
                                <div class="description2">
                                    <p>Have a specific wedding invitation, save the date, or wedding
                                        sign/stationary in mind and don’t know how to bring it to life?
                                        Let me help custom design your vision! From passport invites
                                        for a destination wedding to handheld fans with your wedding
                                        timeline, I can help create your out of the box ideas!</p>
                                </div>
                            </div>
                            <div class="listing">
                                <h4>a la carte</h4>
                                <ul class="services">
                                    <li>Custom Design</li>
                                    <li>Print And Deliver</li>
                                    <li>DIY Your Vision To Life</li>
                                    <li>(Source + Put Together Materials)</li>
                                </ul>
            
                                <div class="desk-btn">
                                    <a href="/contact.html">
                                        <div class="btn-contain">
                                            <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
            
                        <div class="center-btn">
                            <a href="/contact.html">
                                <div class="btn-contain">
                                    <button class="btn btn-flex" style="margin-bottom: 1rem;">Inquire Here <img src="/img/arrow.svg" alt="" width="14px"></button>
                                </div>
                            </a>
                        </div>
            
                        <div class="events">
                            <div class="svgs-container">
                                <svg class="curved" viewBox="0 100 500 95" width="500" height="95">
                                    <path id="curve" fill="transparent" d="M100,200
                                    Q250,100 400,200"/>
                                    <text text-anchor="start"width="600">
                                    <textPath xlink:href="#curve" class="curved-letters sm" startOffset="9px">
                                        Other Events In Mind?
                                    </textPath>
                                    </text>
                                </svg>
                            </div>
            
                            <div class="svg4-container">
                                <img class="flower" src="img/flower.svg" alt="">
                            </div>
                            <h4 style="font-size: 0.8rem;">Contact Us Here</h4>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}