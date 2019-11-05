import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.4885301396982!2d24.927000816107824!3d60.205746981974016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692086097fe9a83%3A0xd0e701000e97142e!2sHartwall%20Arena!5e0!3m2!1ssv!2sfi!4v1572947650878!5m2!1ssv!2sfi"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;