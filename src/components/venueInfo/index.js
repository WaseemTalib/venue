import React from 'react';
import iconCalender from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const venueInfo = () => {
    return (
        <div className="bck_black">

            <div className="center_wrapper">
                <div className="vn_wrapper">
              
                  <Zoom duration={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background: `url(${iconCalender})` }}></div>
                            </div>
                            <div className="vn_title">Event Date & Time</div>
                            <div className="vn_desc">7 August 2020<br/> @10:00 AM</div>
                        </div>
                    </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{background: `url(${iconLocation})` }}></div>
                            </div>
                            <div className="vn_title">Event Location</div>
                            <div className="vn_desc">345 Speer Street<br/>Oakland, CA 9783  </div>
                        </div>
                    </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};



export default venueInfo;