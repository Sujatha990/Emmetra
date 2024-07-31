import React from 'react';
import Image from 'next/image';

const Side = () => {
  return (
    <div>
      <Image
        src="/Images/emmetrasideimg.png" // Ensure the path is correct for your project structure
        alt="Wild Landscape"
        layout="responsive" // Automatically adjusts the image size based on the container
        width={800} // Adjust width as needed
        height={550} // Adjust height as needed
        style={{ objectFit: 'cover' }} // Ensures the image covers the container without distortion
      />
    </div>
  );
};

export default Side;
