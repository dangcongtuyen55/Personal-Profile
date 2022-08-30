import React from "react";

export const About = () => {
  return (
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
              dicta culpa aliquid magni consectetur? Vel maxime eaque facere cum
              nulla veniam libero quae, doloremque distinctio, quasi adipisci
              molestias. Quod, atque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
