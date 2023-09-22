import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse
} from "@material-tailwind/react";

export default function AppNavbar() {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
          "resize",
          () => window.innerWidth >= 960 && setOpenNav(false),
        );
      }, []);


      const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link to="/app" className="flex items-center">
              Dashboard
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Blocks
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Docs
            </a>
          </Typography>
        </ul>
      );


  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          TUCASA CIVE APP
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className=' flex items-center justify-around space-x-2 '>
            <Link to='/login' variant="gradient" size="sm" className="hidden lg:inline-block mb-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg px-4 py-2 ">
            <a href="/login" > Logout </a>
            </Link>
            <Link to='/login' variant="gradient" size="sm" className="hidden lg:inline-block mb-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg px-4 py-2 ">
            <a href="/login" > Sign in </a>
            </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto ">
          {navList}
          <div className=' flex items-center justify-around space-x-2 text-center ' >
            <Link to="/login" variant="gradient" size="sm" fullWidth className="mb-2 w-full bg-white text-black uppercase font-semibold rounded-lg px-4 py-2">
                <span> logout </span>
            </Link>
            <Link to="/app/profile" variant="gradient" size="sm" fullWidth className="mb-2 w-full bg-black text-white rounded-lg px-4 py-2">
                <span> Profile </span>
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  )
}
