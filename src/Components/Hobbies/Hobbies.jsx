import SubHeading from "../../SharedComponents/SubHeading";
import { skillData } from "../../database/SkillData";
import "./favoritHobbies.css";

export default function Hobbies() {

  const {hobbies} = skillData

  return (
    <>
      <div className="hobbies_section py_100">
        <div className="container hobbies_wrapper grid">
          <div className="hobbies_cards gap_25 grid">
            {hobbies.map((hobby) => (
              <div
                className="py_30 px_20 bg_secondary br_5"
                key={Math.random() * 10000}
              >
                <div className="hobby_icon fz_78 bg_green">{hobby.icon}</div>
                <div className="hobby_title fz_25 fw_700 color_ash">
                  {hobby.title}
                </div>
              </div>
            ))}
          </div>

          <div className="hobbies_headding_wrapper  p_relative">
            <div className="hobbies_title">
              <SubHeading heading={"My Hobbies"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
