import NavBar from "../../Components/SharedComponents/Navbar";
import Footer from "../../Components/SharedComponents/Footer";
import Banner from './../../Components/HomeComponents/Banner';
import About from './../About/About';
import Skill from './../Skill/Skill';
import Project from './../Project/Project';
import Contact from './../Contact/Contract';

const Home = () => {
    return(
        <>
        <div>
            <NavBar/>
            <Banner/>
            <About/> 
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
        </>
    )
}

export default Home;