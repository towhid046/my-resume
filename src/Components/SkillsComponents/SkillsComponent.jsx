import SubHeading from "../SharedComponents/SubHeading";
import SmBtnWithoutBorder from "./../SharedComponents/SmBtnWithoutBorder";
import SmBtnWithBorder from "./../SharedComponents/SmBtnWithBorder";
import { skillData } from "../../database/SkillData";
import "./skills.css";

export default function SkillsComponent() {
const {skills} =skillData;
 
  return (
    <>
      <div id="skill" className="skills_section py_30">
        <div className="container skills_section_wrapper grid jc-sb">

          <div className="pretend p_relative">
          <aside className="skills_heading">
            <SubHeading heading={"My skills"} />
          </aside>
          </div>

          <div className="skills_glarry">
            <div className="skill_head_buttons flex gap_20 ai_c mb_30">
              <SmBtnWithoutBorder btnName={"Web"} />
              <SmBtnWithBorder btnName={"Site"} />
              <SmBtnWithBorder btnName={"Programmer"} />
              <SmBtnWithBorder btnName={"Other"} />
            </div>

            <div className="skills_items grid gap_25">
              {skills.map((skill) => (
                <>
                  <div className="skill_card p_relative bg_secondary color_white br_5">
                    <p key={Math.random() * 1000000} className="flex jc-sb">
                      <span className="fw_900 fz_22">{skill.title}</span> <span className="fw_900 fz_18 br_5 bg_color_green p_5">{skill.percentage}</span>
                    </p>
                    <div className="skill_card_border" style={skill.wid40}></div>
                  </div>
                </>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
