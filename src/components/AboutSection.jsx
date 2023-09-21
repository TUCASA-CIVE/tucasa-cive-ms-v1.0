import React from 'react';
import { Typography, Button } from '@material-tailwind/react';

export default function AboutSection() {
  return (
    <div id='about-section' className=' md:flex  ' >
        
        <div className=' md:w-1/2 mt-5 md:mt-0 flex flex-col items-center justify-center space-y-2 px-2 bg-gradient-to-r from-purple-600 to-pink-600 text-gray-50 py-10 '>
            <Typography variant='h4' className=' mb-2' > Who We Are </Typography>
            <Typography variant='paragraph' className=' text-center p-1 ' >
                At Tucasa Cive, we believe in the power of student unity. We are a student-run organization that strives to promote
                collaboration, leadership and academic excellence. Our platform offers a diverse range of resources including informative
                videos, engaging podcasts, and an extensive library of books to help students achive their goals. Join us in our mission to create a brighter future
                for all students
            </Typography>
            <a href="" className=' mt-2'>
                <Button color='white' ripple={true} > Join us </Button>
            </a>
        </div>

        <div className=' mx-2 md:mx-0 md:w-1/2 hidden md:block  '>
            <img
                className=" hidden md:block h-96 w-full object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src='hero.jpg'
                alt="nature image"
                />
        </div>
        
    </div>
  )
}
