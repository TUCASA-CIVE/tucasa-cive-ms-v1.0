import React from 'react'
import { Typography, Button } from '@material-tailwind/react'
import { HiForward } from 'react-icons/hi2'

export default function AppAnnouncements() {
  return (
    <div className=' py-5 px-4 bg-gradient-to-r from-purple-500 to-pink-600  '>
            <Typography variant='h5' className=' text-white text-center ' > Announcements </Typography>
            <div className=' text-white py-4'>
                <Typography variant='h6' className=' text-start flex items-center space-x-2 ' > <HiForward /> 
                    <span className=' underline underline-offset-2 '>Announcement Title Here</span> 
                </Typography>
                <Typography variant='paragraph' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse provident explicabo quibusdam vitae sapiente modi, 
                    laboriosam vero.
                </Typography>
            </div>

            <div className=' text-white py-4'>
                <Typography variant='h6' className=' text-start flex items-center space-x-2 ' > <HiForward /> 
                    <span className=' underline underline-offset-2 '>Announcement 2 Title Here</span> 
                </Typography>
                <Typography variant='paragraph' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse provident explicabo quibusdam vitae sapiente modi, 
                    laboriosam vero.
                </Typography>
            </div>

            <div className=' text-white py-4'>
                <Typography variant='h6' className=' text-start flex items-center space-x-2 ' > <HiForward /> 
                    <span className=' underline underline-offset-2 '>Announcement 3 Title Here</span> 
                </Typography>
                <Typography variant='paragraph' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse provident explicabo quibusdam vitae sapiente modi, 
                    laboriosam vero.
                </Typography>
            </div>
        </div>
  )
}
