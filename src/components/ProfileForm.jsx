import { Typography, Input, Button } from '@material-tailwind/react'
import React from 'react'

export default function 
() {
  return (
    <form className='  ' >
        <div className='md:flex  md:justify-around md:space-x-8 ' >
            <div className=' mb-7 md:w-1/3 ' >
                <Typography variant='h6' className=' mb-3 ' > Personal details </Typography>
                <div className=' flex flex-col space-y-4' >
                    <Input color='indigo' type='text' label='First Name' value={'Nakumbukwa'}  />

                    <Input color='indigo' type='text' label='Last Name' value={'Mbia'}  />

                    <Input color='indigo' type='email' label='Email' value={'nakumbukwa@gmail.com'}  />

                    <Input color='indigo' type='number' label='Age'  />

                    <Input color='indigo' type='text' label='Home Region'  />
                </div>
            </div>

            <div className=' mb-7 md:w-1/3 ' >
                <Typography variant='h6' className=' mb-3 ' > Academic details </Typography>
                <div className=' flex flex-col space-y-4' >
                    <Input color='indigo' type='text' label='Programme'  />

                    <Input color='indigo' type='number' label='Year of Study'   />

                </div>
            </div>

            <div className=' mb-7 md:w-1/3 ' >
                <Typography variant='h6' className=' mb-3 ' > Location </Typography>
                <div className=' flex flex-col space-y-4' >
                    <Input color='indigo' type='number' label='BLock No'  />

                    <Input color='indigo' type='number' label='Floor No'   />

                    <Input color='indigo' type='number' label='Room Number'   />

                </div>
            </div>
        </div>

        <div className=' mb-9 md:text-center md:mx-auto '>
            <Button fullWidth > Save Details </Button>
        </div>
    </form>
  )
}
