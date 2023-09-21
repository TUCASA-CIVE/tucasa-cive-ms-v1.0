import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";


export default function TeamSection() {
  return (
    <div id='team-section' className=' flex flex-col md:flex-row items-center space-y-14 md:space-y-0 md:px-4 md:space-x-8 py-10 bg-gray-300 '>

        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img 
                src='team4.jpg'
                alt="profile-picture" 
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Evance 
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                Secretary
                </Typography>
            </CardBody>
            
            </Card>

            <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img 
                src='team2.jpg'
                alt="profile-picture" 
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Abineli Joshua 
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                Chairperson
                </Typography>
            </CardBody>
            
            </Card>

            <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img 
                src='team1.jpg'
                alt="profile-picture" 
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Nakumbukwa Mbia 
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                Religious Superintendent
                </Typography>
            </CardBody>
            
            </Card>

            <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img 
                src='team3.jpg'
                alt="profile-picture" 
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                Doto 
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                Assistant Secretary
                </Typography>
            </CardBody>
            </Card>
    </div>
  )
}
