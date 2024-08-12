import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/svg/logo.svg';
import arrow from '../../public/svg/arrow.svg';
import '../styles/navbar.css';

class NavBar extends React.Component {
    closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    };
    
    openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    };

    render() {
        return (
            <div className="nav-bar">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.openNav}>
                    &#9776;
                </span>
                <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>
                    &times;
                    </a>
                    <div className="overlay-content">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} alt="" height="140px" style={{ marginBottom: '2rem' }} />          
                            </div>
                        </Link>
                        <Link to="/about"><h2>ABOUT ME</h2></Link>
                        <Link to="/packages"><h2>PACKAGES & PRICING</h2></Link>
                        <Link to="/gallery"><h2>GALLERY</h2></Link>
                        <Link to="/contact"><h2>CONTACT US</h2></Link>
        
                        <Link to="/contact">
                            <div className="contact-btn">
                                <button className="contact-btn btn-flex">
                                    <span>
                                        Inquire Here
                                        <img src={arrow} alt="" width="18px"/>
                                    </span>
                                </button>
                            </div>
                        </Link>        
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;