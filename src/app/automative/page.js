import React from 'react';
import Image from 'next/image';
import './Automotive.css'; // Corrected import statement

const AutomotivePage = () => {
  return (
    <div className="container">
      <h1 className="title">Automotive</h1>
      <figure className="figure">
        <Image 
          src="/Images/emmetrasideimg.png" 
          alt="Automotive Camera Integration" 
          className="figure-img img-fluid rounded" 
          width={800} // Adjust width as needed
          height={450} // Adjust height as needed
        />
        <figcaption className="figure-caption">
          Integrating cameras in vehicles for driver assistance systems,<br/>
          parking assistance, and 360-degree views.
        </figcaption>
      </figure>
    </div>
  );
};


export default AutomotivePage;
