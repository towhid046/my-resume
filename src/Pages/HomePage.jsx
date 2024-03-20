// import Banner from '../../Components/HomeComponents/Banner';

import Banner from "../Components/Home/Banner";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Hobbies from "../Components/Hobbies/Hobbies";
import Contact from "../Components/Contract/Contact";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Hobbies />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
