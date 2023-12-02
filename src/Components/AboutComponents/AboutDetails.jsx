import BigBtnWithoutBorder from "./../SharedComponents/BigBtnWithoutBorder";
import BigBtnWithBorder from "./../SharedComponents/BigBtnWithBorder";
import SubHeading from "./../SharedComponents/SubHeading";
import './aboutSection.css'

export default function AboutDetails() {
  const abouts = [
    {
      details:
        "Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.",
      imgUrl:
        "https://zonayed.me/static/profile-bd1430b121f195d1f823a8e0b9bf2c46.jpg",
      subHeading: <SubHeading heading={"About me"} />,
    },
  ];
  return (
    <>
      <div className="about_section py_100">
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
                <img className="br_5 pointer" src={about.imgUrl} alt="" />
              </div>

              <div className="p_relative about_heading_wrapper">
              <div className="about_heading ">{about.subHeading}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
