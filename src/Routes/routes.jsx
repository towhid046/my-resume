import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Error from './../Pages/Error/Error';
// import Home from './../Pages/Home/Home';
// import About from './../Pages/About/About';
// import Skill from './../Pages/Skill/Skill';
// import Project from './../Pages/Project/Project';
// import Contact from './../Pages/Contact/Contract';

const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        // children: [
        //     {   
        //         path: '/',
        //         element: <Home/>
        //     },
        //     {
        //         path: '/about',
        //         element: <About/>,
        //     },
        //     {
        //         path: '/skill',
        //         element: <Skill/>
        //     },
        //     {
        //         path: '/project',
        //         element: <Project/>
        //     },
        //     {
        //         path: '/contact',
        //         element: <Contact/>
        //     },
        // ]
    },
    {
        path: '*',
        element: <Error/>
    }


])

export default routes
