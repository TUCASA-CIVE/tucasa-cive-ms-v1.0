import React from 'react'
import AppNavbar from '../components/AppNavbar'
import { Typography, Badge, Avatar } from '@material-tailwind/react'
import ProfileForm from '../components/ProfileForm'

export default function Profile() {
  return (
    <div className='' >
        <AppNavbar />

        <Typography variant='h5' className=' text-center mt-3 ' color='gray' > Your Profile </Typography>

        <div className=' flex items-center justify-center py-3 ' >
            <Badge overlap="circular" placement="bottom-end" withBorder >
                <Avatar
                alt="profile picture"
                src='../../../public/team1.jpg'
                className=' h-32 w-32 '
                />
            </Badge>
        </div>

        <div className=' px-4 ' >
            <ProfileForm />
        </div>

    </div>
  )
}
