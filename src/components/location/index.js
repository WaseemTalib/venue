import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105914.18864000594!2d-118.44081934179681!3d33.94579870000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6dd6b98fea7%3A0x88bef9bbc7879dd4!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1599730639227!5m2!1sen!2s"
                width="100%" height="500px" frameBorder="0" allowFullScreen="" ariaHidden="false"></iframe>
        <div className="location_tag">
            <div>Location</div>
        </div>
       
       
        </div>
    );
};

export default Location;