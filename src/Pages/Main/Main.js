import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HTML from "../../Assets/Images/html.png";
import Css from "../../Assets/Images/css.png";
import JS from "../../Assets/Images/js.png";
import Mongodb from "../../Assets/Images/mongo.png";
import Nodejs from "../../Assets/Images/Node.png";
import Reactjs from "../../Assets/Images/react.png";
import Github from "../../Assets/Images/github.png";
import Me from "../../Assets/Images/me.png";
import ProjectEcommerce from "../../Assets/Images/Project-Ecommerce.jpg";
import "../../index.css";

export const Main = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-800">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          {/* <p className="text-pink-600">Hi, my name is</p>
    <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
      Cong Tuyen
    </h1>
    <h2 className="text-4xl sm:text-7xl font-bold text-gray-300">
      I'm Front-End Developer.
    </h2>
    <div>
      <Link to="/project">
        <button className="text-white group border-2 rounded-2xl py-3 px-3 my-2 flex items-center hover:bg-pink-400">
          View Project
          <span className="group-hover:rotate-90 duration-300">
            <ArrowForwardIcon className="ml-2" />
          </span>
        </button>
      </Link>
    </div> */}
          <div className="flex items-center py-8">
            {/* left side */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className="text-pink-600 font-bold text-2xl mb-5">
                Hey! I'm Tuyen 👋
              </p>
              <h1 className="text-4xl font-bold">I'm Front-End Developer.</h1>
              <Link to="/projects">
                <button className="text-white font-bold group border-2 rounded-2xl py-3 px-3 my-2 flex items-center hover:bg-pink-600">
                  View Project
                  <span className="group-hover:rotate-90 duration-300">
                    <ArrowForwardIcon className="ml-2" />
                  </span>
                </button>
              </Link>
            </div>

            {/* right side */}
            <div className="hidden flex-1 lg:flex justify-end items-end h-full">
              <imgcd
                className="transform skew-y-12"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/273504835_3046072845710496_7903040882535119182_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8FBtenlWTBkAX_ISRsl&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8uzyz5iP_mCShxNMYj6R_z7T9mwvLFRQWF-0NSvdPdZA&oe=6311D137"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div name="about" className="w-full h-screen bg-gray-800 text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 vpl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8 ">
            <div className="sm:text-right text-4xl font-bold ">
              <p>Hi.I'm Tuyen, Wellcome to my portfolio</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                dicta culpa aliquid magni consectetur? Vel maxime eaque facere
                cum nulla veniam libero quae, doloremque distinctio, quasi
                adipisci molestias. Quod, atque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div name="skill" className="w-full h-screen bg-gray-800 text-gray-300">
        {/* Container */}

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
            <p className="py-4">
              ## These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={HTML} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={Css} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={JS} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={Reactjs} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={Mongodb} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={Nodejs} alt="" />
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-24 mx-auto" src={Github} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div name="project" className="w-full h-full bg-gray-800 text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pt-6">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </p>
            <p className="py-6">
              ## Here are some projects that I have worked on
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
            {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effect */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-red-600 tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-red-600 tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-red-600 tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-red-600 tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${ProjectEcommerce})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-red-600 tracking-wider">
                  Mern Stack Ecommerce
                </span>
                <div className="pt-8 text-center">
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="#">
                    {" "}
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        name="contact"
        className="w-full h-screen bg-slate-800 flex justify-center items-center p-4"
      >
        <form
          action="https://getform.io/f/7d9d9e55-b01e-4328-b994-f28e1b8629f5"
          method="post"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              // Contact me by email:
              <span className="font-bold">dangcongtuyen55@gmail.com</span> and
              phone:<span className="font-bold">0815312150</span> or fill in
              your information in the form below 😁😁
            </p>
          </div>
          <input
            type="text"
            className="bg-white p-2"
            placeholder="fullname"
            name="fullname"
          />
          <input
            type="email"
            className="bg-white p-2 my-4 "
            placeholder="email"
            name="email"
          />
          <textarea
            className="bg-white p-2"
            name="message"
            id=""
            cols="10"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
