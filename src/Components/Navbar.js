import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import {Link} from 'react-scroll';
import Logo from "../Assets/Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-200">
      <div className="logo">
        <img src={Logo} alt="" style={{ width: "60px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hambuger */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <MenuIcon /> : <CloseIcon />}
      </div>

      {/*  Menu Mobile */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-800 text-gray-200 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/project">Projects</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Social icons */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://www.facebook.com/C.Tuyen.Coder.Cui.Bap/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Facebook <FacebookIcon sx={{ fontSize: 40 }} />
            </a>
          </li>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://github.com/dangcongtuyen55"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <GitHubIcon sx={{ fontSize: 40 }} />
            </a>
          </li>
          <li className="w-[160px] h-60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <EmailIcon sx={{ fontSize: 40 }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
