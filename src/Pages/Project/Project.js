import React from "react";
import ProjectEcommerce from "../../Assets/Images/Project-Ecommerce.jpg";
import "../Project/index.css";

export const Project = () => {
  return (
    <div name="project" className="w-full h-screen bg-gray-800 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-6">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">
            // Here are some projects that I have worked on
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
  );
};
