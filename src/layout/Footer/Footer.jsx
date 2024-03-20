/* eslint-disable react/jsx-key */
import { FaLinkedin, FaSquareWhatsapp, FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./footer.css";

export default function Footer() {
  const socialIcons = [
    <FaSquareWhatsapp />,
    <IoMdMail />,
    <FaLinkedin />,
    <FaGithub />,
  ];

  return (
    <>
      <footer className=" bg_secondary py_25 ">
        <div className="container footer_wrapper flex jc-sb">
          <ul className="footer_icons flex gap_20 fz_26 ai_c">
            {socialIcons.map((icon) => (
              <li className="pointer footer_icon">{icon}</li>
            ))}
          </ul>
          <div className="footer_right flex gap_20">
            <h2 className="footer_thanks br_5 color_ash fw_700 fz_18 bg_primary">
              Thanks
            </h2>
            <h3 className="fw_900 fz_18">
              BY ME
              <span className="pointer bg_color_green p_5 color_ash br_5 ml_8">
                  <a href='#'><IoIosArrowUp /></a>
              </span>
            </h3>
          </div>
        </div>
          <p className="text_center copy_rigth">All Right reserve by @Towhid Islam</p>
      </footer>
    </>
  );
}
