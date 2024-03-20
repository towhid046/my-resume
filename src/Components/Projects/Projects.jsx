import SubHeading from "./../../SharedComponents/SubHeading";
import SmBtnWithoutBorder from "./../../SharedComponents/SmBtnWithoutBorder";
import SmBtnWithBorder from "./../../SharedComponents/SmBtnWithBorder";
import './Projects.css'
import BigBtnWithBorder from './../../SharedComponents/BigBtnWithBorder';
import { projectData } from "../../database/ProjectData";
import { Link } from 'react-router-dom';

const Projects = () => {
  
const {projects} = projectData;

  return (
    <>
      <div id="project" className="py_100">
        <div className="container project_section jc-sb grid gap_25">
          <div className="projects_heading_wrapper p_relative">
            <div className="project_heading">
              <SubHeading heading="Projects" />
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
                    <p className="flex gap_20 fz_26 fw_400 mb_20" >
                      <Link target="_blank" to={project.live.link} className="live_icon">{project.live.icon}</Link> 
                      <Link target="_blank" to={project.git.link} className="git_icon">{project.git.icon}</Link>
                    </p>
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
