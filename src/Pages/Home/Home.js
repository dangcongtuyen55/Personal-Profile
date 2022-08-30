import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Home = () => {
  return (
    <div className="w-full h-screen bg-slate-800">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Cong Tuyen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-300">
          I'm Front-End Developer.
        </h2>
        <div>
          <button className="text-white group border-2 rounded-2xl py-3 px-3 my-2 flex items-center hover:bg-pink-400">
            View Project
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <ArrowForwardIcon className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
