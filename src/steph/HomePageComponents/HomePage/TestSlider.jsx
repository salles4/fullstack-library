import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { infoSlides } from '../../data';

const TestSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"> {/* Increased padding and added shadow */}
            <Slider {...settings}>
                {infoSlides.map((slide, index) => (
                    <div key={index} className="flex justify-center items-center"> {/* Centering content */}
                        <p className="text-lg md:text-xl text-lime-100 text-center">{slide.info}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestSlider;
