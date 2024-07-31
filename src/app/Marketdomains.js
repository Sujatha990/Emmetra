import React from 'react';
import './Marketdomains.css'; // Make sure to create this CSS file
import Link from 'next/link';

const Marketdomains = () => {
  return (
    <div className="market-domains-container">
      <h1 style={{ textAlign: "center" }}>Market Domains</h1>
      <div className="bg-image-container">
      <div className="bg-image">
  <img
    src="Images/emmetrasideimg.png"
    className="img-fluid"
    alt="Sample"
  />
  <div className="mask">
    <div className="content">
      <Link href="/automative" className="text-white mb-0" style={{ textDecoration: 'none' }}>
        Automotive
      </Link>
    </div>
  </div>
</div>

        <div className="bg-image">
          <img
            src="Images/emmetrasideimg.png"
            className="img-fluid"
            alt="Sample"
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Medical</p>
            </div>
          </div>
        </div>
        <div className="bg-image">
          <img
            src="Images/emmetrasideimg.png"
            className="img-fluid"
            alt="Sample"
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Laptops/Notebooks</p>
            </div>
          </div>
        </div>
        <div className="bg-image">
          <img
            src="Images/emmetrasideimg.png"
            className="img-fluid"
            alt="Sample"
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Video Security</p>
            </div>
          </div>
        </div>
        <div className="bg-image">
          <img
            src="Images/emmetrasideimg.png"
            className="img-fluid"
            alt="Sample"
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Drones</p>
            </div>
          </div>
        </div>
        <div className="bg-image">
          <img
            src="Images/emmetrasideimg.png"
            className="img-fluid"
            alt="Sample"
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketdomains;
