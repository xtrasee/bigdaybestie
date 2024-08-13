import React from 'react';
import { Link } from 'react-router-dom';
import { Keyboard, Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/gallery.css'
import Navbar from "../components/NavBar";
import gallery1 from "../../public/images/gallery-1.JPEG";
import gallery5 from "../../public/images/gallery-5.JPEG";
import gallery6 from "../../public/images/gallery-6.JPG";
import gallery8 from "../../public/images/gallery-8.JPEG";
import mainGallery1 from "../../public/images/main-gallery-1.JPG";
import mainGallery2 from "../../public/images/main-gallery-2.JPEG";
import mainGallery3 from "../../public/images/main-gallery-3.JPEG";
import mainGallery4 from "../../public/images/main-gallery-4.JPEG";
import mainGallery5 from "../../public/images/main-gallery-5.JPEG";
import mainGallery6 from "../../public/images/main-gallery-6.JPEG";

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

            <main>
                <div className="gallery-container">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                        </div>
                    </Link>

                    <div className="gallery" id="gallery">
                        <h2 style={{ fontSize: '1.75rem;' }}>GALLERY</h2>

                        <div className="swiper-container gallery-top">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery1} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery2} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery3} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery4} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery5} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery1} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery8} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery5} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery6} alt=""/></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery6} alt=""/></div></div>
                            </div>

                            <div className="navigation-container">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
            
                        <div className="swiper-container gallery-thumbs">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery1} alt="" height="50px"></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery2} alt="" height="500px"></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery3} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery4} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery5} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery1} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery8} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery5} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={gallery6} alt=""></div></div>
                                <div className="swiper-slide"><div className="swiper-slide-container"><img className="swiper-slide-container" src={mainGallery1} alt=""></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <script>
                    document.addEventListener("DOMContentLoaded", function () {
                        var galleryTop = new Swiper('.gallery-top', {
                                        spaceBetween: 10,
                                        navigation: {
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                        },
                                        initialSlide: 0
                                    });
                
                                var galleryThumbs = new Swiper('.gallery-thumbs', {
                                    spaceBetween: 10,
                                    centeredSlides: true,
                                    slidesPerView: 'auto',
                                    touchRatio: 0.2,
                                    slideToClickedSlide: false,
                                    initialSlide: 0
                                });
                
                                galleryTop.controller.control = galleryThumbs;
                                galleryThumbs.controller.control = galleryTop;
                            });
                        </script> */}
            </main>
        </>
    )
}