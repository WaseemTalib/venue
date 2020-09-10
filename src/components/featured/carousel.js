import React from 'react';
import Slider from "react-slick";
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';


const carousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
      };

    return (
        <div className="carrousel_wrapper" style={{height: `${window.innerHeight}px`, overflow: "hidden"}}>
        <Slider {...settings}>
            <div className="carrousel_image" >
                <img src={slide_one} alt={slide_one} style={{height: `${window.innerHeight}px`, width:"100%"}} />
            </div>
            <div className="carrousel_image" >
                <img src={slide_two} alt={slide_two} style={{height: `${window.innerHeight}px`, width:"100%"}} />
            </div>
            <div className="carrousel_image" >
                <img src={slide_three} alt={slide_three} style={{height: `${window.innerHeight}px`, width:"100%"}} />
            </div>
        {/* <div className="carrousel_image" style={{background:`url(${require('../../resources/images/slide_one.jpg')})`, height: `${window.innerHeight}px`}}></div>
        <div className="carrousel_image" style={{background:"red", height: `${window.innerHeight}px`}}></div>
        <div className="carrousel_image" style={{background:"blue", height: `${window.innerHeight}px`}}></div> */}
      </Slider>
      </div>
    );
};

export default carousel;