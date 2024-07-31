import React from 'react';
import './Serviceoffering.css';

const Serviceoffering = () => {
    return (
        <div className="container about-us">
            <h1 className='display-2'>What we offer</h1>

            {/* First Row: Image on the left, content on the right */}
            <div className="row">
                <div className="col-md-6 image-container">
                    <img src="Images/emmetrasideimg.png" alt="Sensor Calibration" className="service-image" style={{height:"200px",width:'400px'}} />
                </div>
                <div className="col-md-6 text-container" style={{paddingTop:"50px"}}>
                    <h2 className="display-6">Sensor, Optics, and ISP Calibration</h2>
                    <p>
                        Precise calibration, tuning, and benchmarking of sensors, optics, and Image Signal Processors (ISP) to achieve superior image quality.
                    </p>
                </div>
            </div>

            {/* Second Row: Content on the left, image on the right */}
            <div className="row reverse-row">
                <div className="col-md-6 text-container">
                    <h2 className="display-6">Image Sensor Driver Development and Integration</h2>
                    <p>
                        Efficient development and integration of image sensor drivers into System on Chip (SoC) and Image Signal Processor (ISP) systems.
                    </p>
                </div>
                <div className="col-md-6 image-container">
                    <img src="Images/emmetrasideimg.png" alt="Image Sensor Driver" className="service-image" style={{height:"200px",width:'400px'}}  />
                </div>
            </div>

            {/* Third Row: Image on the left, content on the right */}
            <div className="row">
                <div className="col-md-6 image-container">
                    <img src="Images/emmetrasideimg.png" alt="Camera Software Development" className="service-image" style={{height:"200px",width:'400px'}}  />
                </div>
                <div className="col-md-6 text-container" style={{paddingTop:"50px"}}>
                    <h2 className="display-6">Camera Software Development and Optimization</h2>
                    <p>
                        Specialized services for enhancing camera software through development and optimization processes.
                    </p>
                </div>
            </div>

            {/* Fourth Row: Content on the left, image on the right */}
            <div className="row reverse-row">
                <div className="col-md-6 text-container">
                    <h2 className="display-6">Camera Imaging Algorithm Development</h2>
                    <p>
                        Expert research and development services focusing on camera imaging algorithm advancement.
                    </p>
                </div>
                <div className="col-md-6 image-container">
                    <img src="Images/emmetrasideimg.png" alt="Camera Imaging Algorithm" className="service-image" style={{height:"200px",width:'400px'}}  />
                </div>
            </div>
        </div>
    );
};

export default Serviceoffering;
