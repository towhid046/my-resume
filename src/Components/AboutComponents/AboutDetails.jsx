import BigBtnWithoutBorder from "./../SharedComponents/BigBtnWithoutBorder";
import BigBtnWithBorder from "./../SharedComponents/BigBtnWithBorder";
import "./aboutSection.css";
import SubHeading from "./../SharedComponents/SubHeading";
import { aboutData } from './../../database/AboutData';

export default function AboutDetails() {
  const {abouts:{details, imgUrl}} = aboutData;

  return (
    <>
      <div id="about" className="about_section py_100">
        <div className="container about_section_wrapper grid ai_c">
            <>
              <div className="about_content fw_400 color_ash fz_18">
                <p className="mb_30">{details}</p>
                <div className="about_section_buttons flex gap_20">
                  <BigBtnWithoutBorder btnName={"Get Resume"} />
                  <BigBtnWithBorder btnName={"My Skills"} />
                </div>
              </div>

              <div className="about_img">
                <img
                  className="br_5 pointer"
                  src={imgUrl}
                  alt="My picture"
                />
              </div>
            </>

          <div className="p_relative about_heading_wrapper">
            <div className="about_heading ">
              <SubHeading heading={"About me"} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
