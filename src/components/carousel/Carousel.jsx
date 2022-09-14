import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';
import img10 from './img10.jpg';

import './carousel.css'

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={img2} alt='hi' />
                </div>
                <div>
                    <img src={img3} alt='hi' />
                </div>
                <div>
                    <img src={img8} alt='hi' />
                </div>
                <div>
                    <img src={img9} alt='hi' />
                </div>
                <div>
                    <img src={img10} alt='hi' />
                </div>
            </Carousel>
        </div>
    );
}