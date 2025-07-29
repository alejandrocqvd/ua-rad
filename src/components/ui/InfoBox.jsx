import React from 'react'
import Image from 'next/image';

export const InfoBox = ({ imagePath, title, measurement }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <Image 
        src={imagePath}
        alt="UA Rad Team Photo"
        width={800}
        height={800}
        className="h-12 w-auto"
      />
      <div className="flex flex-col justify-center items-center md:items-start text-left md:ml-2">
        <p className='font-semibold'>{title}:</p>
        <p className=''>{measurement}</p>
      </div>
    </div>
  );
}
