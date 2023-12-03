// import { Outlet } from "react-router-dom";
import NavBar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Home from './../../Pages/Home/Home';
import About from "../../Pages/About/About";
import Skill from "../../Pages/Skill/Skill";
import Project from "../../Pages/Project/Project";
import Contact from "../../Pages/Contact/Contract";

export default function MainLayout() {
  return (
    <>
    <div>
        <NavBar/>
        {/* <Outlet/> */}
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
    </>
  )
}
