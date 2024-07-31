import React from 'react';
import './Marketdomains.css'; // Make sure to create this CSS file
import Link from 'next/link';
import Image from 'next/image';

const Marketdomains = () => {
  return (
    <div className="market-domains-container">
      <h1 style={{ textAlign: "center" }}>Market Domains</h1>
      <div className="bg-image-container">
        <div className="bg-image">
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
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
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Medical</p>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Laptops/Notebooks</p>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Video Security</p>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
          />
          <div className="mask">
            <div className="content">
              <p className="text-white mb-0">Drones</p>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <Image
            src="/Images/emmetrasideimg.png" // Ensure this path is correct
            className="img-fluid"
            alt="Sample"
            layout="responsive" // Use layout prop for responsive images
            width={600} // Set appropriate width
            height={400} // Set appropriate height
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
