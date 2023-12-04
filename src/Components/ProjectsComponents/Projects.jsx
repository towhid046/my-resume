import SubHeading from "./../SharedComponents/SubHeading";
import SmBtnWithoutBorder from "./../SharedComponents/SmBtnWithoutBorder";
import SmBtnWithBorder from "./../SharedComponents/SmBtnWithBorder";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import './Projects.css'
import BigBtnWithBorder from './../SharedComponents/BigBtnWithBorder';

const Projects = () => {
  
  const projects = [
    {
      imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Gradient",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
      liveLink: <RxOpenInNewWindow />, 
      gitIcon: <FaGithub />,
      properties: "Jsx, React js, Vanila js",
    },
    {
        imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Gradient",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
        liveLink: <RxOpenInNewWindow />, 
        gitIcon: <FaGithub />,
        properties: "Jsx, React js, Vanila js",
    },
    {
        imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Gradient",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
        liveLink: <RxOpenInNewWindow />, 
        gitIcon: <FaGithub />,
        properties: "Jsx, React js, Vanila js",
    },
    {
        imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Gradient",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
        liveLink: <RxOpenInNewWindow />, 
        gitIcon: <FaGithub />,
        properties: "Jsx, React js, Vanila js",
    },
    {
        imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Gradient",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
        liveLink: <RxOpenInNewWindow />, 
        gitIcon: <FaGithub />,
        properties: "Jsx, React js, Vanila js",
    },
    {
        imgUrl:"https://images.pexels.com/photos/1190906/pexels-photo-1190906.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Gradient",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit veniam adipisci voluptate odio nam unde fuga. Vero enim",
        liveLink: <RxOpenInNewWindow />, 
        gitIcon: <FaGithub />,
        properties: "Jsx, React js, Vanila js",
    },
   
  ];

  return (
    <>
      <div id="project" className="py_100">
        <div className="container project_section jc-sb grid gap_25">
          <div className="projects_heading_wrapper p_relative">
            <div className="project_heading">
              <SubHeading heading={"Projects"} />
            </div>
          </div>

          <div className="projects_cards_wrapper">
            <div className="project_buttons mb_30 flex gap_25">
              <SmBtnWithoutBorder btnName={"Web"} />
              <SmBtnWithBorder btnName={"Others"} />
            </div>

            <div className="project_cards grid gap_25 mb_30">
              {
              projects.map((project) => (
                <div key={Math.random() * 100000} className="project_card bg_secondary br_5">
                  <div className="project_card_img">
                    <img className="br_5" src={project.imgUrl} alt="" />
                  </div>

                  <div className="project_card_text p_20 color_ash">
                    <h2 className="fw_900 fz_26 mb_20">{project.title}</h2>
                    <h4 className="fw_400 fz_18 mb_20">{project.body}</h4>
                    <p className="flex gap_20 fz_26 fw_400 mb_20" ><span className="live_icon">{project.liveLink}</span> <span className="git_icon">{project.gitIcon}</span></p>
                    <p>{project.properties}</p>
                  </div>
                </div>
              
              ))}
             
            </div>
            
          </div>
        </div>
        <div className="text_center">
             <BigBtnWithBorder btnName={'More'}/>
             </div>
      </div>
    </>
  );
};

export default Projects;
