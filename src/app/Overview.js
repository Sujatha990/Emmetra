import React from 'react';
import Link from 'next/link';
import './Overview.css';

const Overview = () => {
  return (
    <div>
      <h2 className="display-4" style={{textAlign:"center", marginTop: "20px"}}>Company Overview</h2>
      <p style={{textAlign:"center"}}>
        Exploring Emmetra Technology's Embedded Camera Solutions.
         </p>
      
      <div className="container success-stories">
        <div className="row">
          <div className="col-md-3">
            <div className="story">
              <img src="Images/emmetrasideimg.png" alt="Success Story 1" />
              <div className="story-content">
                <h4>Comrehensive Camera Services</h4>
                <p>Emmetra Technology Provides A range of Services including Camera software development, tuning,and calibration.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="story">
              <img src="Images/emmetrasideimg.png" alt="Success Story 2" />
              <div className="story-content">
                <h4>Proven Track Record</h4>
                <p>with over 20 years of experience,Emmetra has sucessfully delivered 100+ camera products, showcasing their expartise and reliability .</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="story">
              <img src="Images/emmetrasideimg.png" alt="Success Story 3" />
              <div className="story-content">
                <h4>Diverse Customer Segments</h4>
                <p>Emmetra serves a wide range of industries with its embedded camera Solutions,catering to various Customer needs.</p>
              </div>
            </div>
          </div>
        
        <div className="col-md-3">
            <div className="story">
              <img src="Images/emmetrasideimg.png" alt="Success Story 3" />
              <div className="story-content">
                <h4>Unique Value Proposition</h4>
                <p>Through strategic partnerships and dedicated infrastructure, Emmetra offers unique value in the embedded camera market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Overview;
