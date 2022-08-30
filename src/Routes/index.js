import { About } from "../Pages/About/About";
// import { Home } from "../Pages/Home/Home";
import { Project } from "../Pages/Project/Project";
import { Skill } from "../Pages/Skill/Skill";
import { Contact } from "../Pages/Contact/Contact";
import { Main } from "../Pages/Main/Main";
const publicRoutes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/projects",
    component: Project,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/skills",
    component: Skill,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
