import React from "react";
import HTML from "../../Assets/Images/html.png";
import Css from "../../Assets/Images/css.png";
import JS from "../../Assets/Images/js.png";
import Mongodb from "../../Assets/Images/mongo.png";
import Nodejs from "../../Assets/Images/Node.png";
import Reactjs from "../../Assets/Images/react.png";
import Github from "../../Assets/Images/github.png";

export const Skill = () => {
  return (
    <div name="skill" className="w-full h-screen bg-gray-800 text-gray-300">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
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
  );
};
