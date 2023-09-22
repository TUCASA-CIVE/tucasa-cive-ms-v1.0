import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Button, Carousel, Typography } from '@material-tailwind/react';
import AppAnnouncements from '../components/AppAnnouncements';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
        <AppNavbar />

        <Carousel className="rounded">
            <img
                src='welcome-back.jpg'
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
            src='welcome-back.jpg'
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src='welcome-back.jpg'
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>

        <Typography variant='h1' color='gray' textGradient className=' p-3 '  > Welcome Nakumbukwa Mbia </Typography>

        <div className=' px-3 py-5 '>
            <Link to="/app/profile" className=' mx-auto '>
                <Button  > Complete Your Profile </Button>
            </Link>
        </div>

        <AppAnnouncements />

        <Footer />


    </div>
  )
}
