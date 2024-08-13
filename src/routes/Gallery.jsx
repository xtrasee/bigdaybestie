import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery.css'
import Navbar from "../components/NavBar";

const Gallery = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav">
                        <Navbar />
                    </div>
                </div>
            </header>
        </>
    )
}