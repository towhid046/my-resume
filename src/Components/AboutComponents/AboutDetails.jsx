import BigBtnWithoutBorder from "./../SharedComponents/BigBtnWithoutBorder";
import BigBtnWithBorder from "./../SharedComponents/BigBtnWithBorder";
import "./aboutSection.css";
import { useRef } from "react";
import { abouts } from "./../../DATABASE/about.js";
import SubHeading from "./../SharedComponents/SubHeading";



export default function AboutDetails() {
  const iffImg = useRef(null);
  const onHoverImgHandelar = () => {
    if (iffImg.current)
      iffImg.current.src =
        "https://i.ibb.co/Ss0fr0v/IMG-20220920-WA0001-02-EDIT-EDIT.jpg";
  };
  const handleMouseOut = () => {
    if (iffImg.current)
      iffImg.current.src =
        "https://i.ibb.co/X5Zfhcb/IMG-20220920-WA0001-02-EDIT.jpg";
  };

  return (
    <>
      <div id="about" className="about_section py_100">
        <div className="container about_section_wrapper grid ai_c">
          {abouts.map((about) => (
            <>
              <div className="about_content fw_400 color_ash fz_18">
                <p className="mb_30">{about.details}</p>
                <div className="about_section_buttons flex gap_20">
                  <BigBtnWithoutBorder btnName={"Get Resume"} />
                  <BigBtnWithBorder btnName={"My Skills"} />
                </div>
              </div>

              <div className="about_img">
                <img
                  ref={iffImg}
                  onMouseOver={onHoverImgHandelar}
                  onMouseLeave={handleMouseOut}
                  className="br_5 pointer"
                  src={about.imgUrl}
                  alt=""
                />
              </div>
            </>
          ))}
          <div className="p_relative about_heading_wrapper">
            <div className="about_heading ">
              <SubHeading heading={'About me'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
