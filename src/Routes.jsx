import React from "react";

import { useRoutes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

import Login from "./pages/Login";

import OneboxOne from "./pages/OneboxOne";

// import OneboxFour from "./pages/OneboxFour";

import Onebox from "./pages/Onebox";

// import OneboxTwo from "./pages/OneboxTwo";

// import OneboxThree from "pages/OneboxThree";

const ProjectRoutes = () => {

let element = useRoutes ([

{ path: "/", element: <Home/> },

{ path: "*", element: <NotFound/> },

{

path: "login",

element: <Login />,

},

{

path: "oneboxone",

element: <OneboxOne />,

},

{

path: "onebox",

element: <Onebox />,

},

]);

return element;

};

export default ProjectRoutes;