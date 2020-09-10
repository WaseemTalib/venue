import React from 'react';
import Carousel from './carousel';
import TimeCount from './timeCount';

const Featured = () => {
    return (
        <div style={{position: "relative", backgroundColor: "green"}}>
            
            <Carousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        <TimeCount />
        </div>
    );
};

export default Featured;


