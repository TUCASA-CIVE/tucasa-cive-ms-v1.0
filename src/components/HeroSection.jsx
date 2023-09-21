import React from 'react';
import { Typography } from '@material-tailwind/react';

export default function HeroSection() {
  return (
    <div className=' flex flex-col md:flex-row mt-3 md:py-10  ' >
        <div className=' mx-2 md:w-1/2  '>
            <img
                className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src='hero.jpg'
                alt="nature image"
                />
        </div>
        <div className=' flex items-center justify-center text-center min-h-[200px] px-5 md:w-1/2 py-5 ' >
            <Typography variant='h1' color='pink' textGradient > Unleashing the Potential of student Unity </Typography>
        </div>
    </div>
  )
}
