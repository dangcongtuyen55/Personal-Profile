import React from "react";
import { Home } from "../../Pages/Home/Home";
import { Project } from "../../Pages/Project/Project";
import { Skill } from "../../Pages/Skill/Skill";

export const Content = () => {
  return (
    <div>
      <Home />
      <Skill />
      <Project />
    </div>
  );
};
