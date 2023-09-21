import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className=' bg-gray-50 min-h-screen md:flex    ' >
        <div className="relative h-full w-full md:w-1/2 ">
            <img
                src='welcome-back.jpg'
            alt="image 1"
            className="h-full md:h-screen w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                Welcome Back
                </Typography>
                
            </div>
            </div>
        </div>
        <div className=' md:flex md:flex-col md:items-center md:justify-center md:w-1/2 '>
            <div className='px-4 md:px-8 py-4 md:bg-gray-200 md:rounded-xl md:shadow '>
                <Typography variant='h2' className=' md:text-3xl md:mb-3 md:mt-5 ' textGradient color='purple'  > Sign in </Typography>
                <Typography variant='small' className=' mb-6 md:mb-8 ' color='gray' > Enter your phone number and password to sign in </Typography>

                <form action="" className='  flex flex-col space-y-6 mb-5 md:w-[400px] ' >
                    <Input type='tel' className='' color='indigo' size='lg' label='Enter phone number ' />
                    <Input type='password' color='indigo' size='lg' label='Enter password ' />
                    <Input type='submit' value={'Sign in'} className=' bg-gradient-to-r from-purple-600 to-pink-600 text-white ' />
                </form>

                

                <Typography className=' text-center text-gray-700 md:mb-5 ' > Not registered? <Link className=' font-semibold text-black ' > Create Account </Link> </Typography>
            </div>
        </div>

    </div>
  )
}
