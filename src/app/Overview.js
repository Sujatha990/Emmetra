import React from 'react';
import Image from 'next/image';
import './Overview.css';

const Overview = () => {
  return (
    <div>
      <h2 className="display-4" style={{ textAlign: "center", marginTop: "20px" }}>
        Company Overview
      </h2>
      <p style={{ textAlign: "center" }}>
        Exploring Emmetra Technology's Embedded Camera Solutions.
      </p>

      <div className="container success-stories">
        <div className="row">
          <div className="col-md-3">
            <div className="story">
              <Image
                src="/Images/emmetrasideimg.png"
                alt="Success Story 1"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="story-content">
                <h4>Comprehensive Camera Services</h4>
                <p>
                  Emmetra Technology provides a range of services including camera software development, tuning, and calibration.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="story">
              <Image
                src="/Images/emmetrasideimg.png"
                alt="Success Story 2"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="story-content">
                <h4>Proven Track Record</h4>
                <p>
                  With over 20 years of experience, Emmetra has successfully delivered 100+ camera products, showcasing their expertise and reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="story">
              <Image
                src="/Images/emmetrasideimg.png"
                alt="Success Story 3"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="story-content">
                <h4>Diverse Customer Segments</h4>
                <p>
                  Emmetra serves a wide range of industries with its embedded camera solutions, catering to various customer needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="story">
              <Image
                src="/Images/emmetrasideimg.png"
                alt="Success Story 4"
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="story-content">
                <h4>Unique Value Proposition</h4>
                <p>
                  Through strategic partnerships and dedicated infrastructure, Emmetra offers unique value in the embedded camera market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
