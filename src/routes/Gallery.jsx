import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import '../styles/gallery.css'

import Navbar from "../components/NavBar";
import logo from '/svg/logo.svg'
import gallery1 from "../../public/images/gallery-1.JPEG";
import gallery5 from "../../public/images/gallery-5.JPEG";
import gallery6 from "../../public/images/gallery-6.JPG";
import gallery8 from "../../public/images/gallery-8.JPEG";
import mainGallery1 from "/images/main-gallery-1.JPG";
import mainGallery2 from "/images/main-gallery-2.JPEG";
import mainGallery3 from "/public/images/main-gallery-3.JPEG";
import mainGallery4 from "/public/images/main-gallery-4.JPEG";
import mainGallery5 from "/public/images/main-gallery-5.JPEG";
import mainGallery6 from "/public/images/main-gallery-6.JPEG";

const Gallery = () => {

    const [thumbsSwiper, setThumbSwiper] = useState(null);

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
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="Logo" height="140px" style={{ marginBottom: '2rem' }} />
                    </div>
                </Link>
                        
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery1}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery2}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery3}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery4}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery5}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery1}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery8}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery5}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery6} /></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery6}/></SwiperSlide>
                </Swiper>

                <Swiper
                onSwiper={setThumbSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                >
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery1}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery2}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery3}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery4}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery5}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery1}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery8}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery5}/></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={gallery6} /></SwiperSlide>
                    <SwiperSlide><img className="swiper-slide-container" src={mainGallery6}/></SwiperSlide>
                    
                </Swiper>
            </main>
        </>
    )
}

export default Gallery;