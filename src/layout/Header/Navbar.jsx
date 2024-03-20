import { useState } from "react";
import "./navbar.css";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SmBtnWithBorder from "../../SharedComponents/SmBtnWithBorder";
import { navData } from "./../../database/navbar";
import { Link } from "react-router-dom";
import scrollToTop from "../../SharedComponents/scrollToTop";
const { logo, menuItems, resumeLink } = navData;

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);
  const [isActiveItem, setIsActiveItem] = useState(0);

  const toggleMenu = () => {
    setChecked(!isChecked);
  };

  // function to scroll top:

  // setActiveItem:
  const handleMenuItemClick = (index) => {
    setIsActiveItem(index);
    setChecked(false);
    scrollToTop();
  };

  const callTwoFunction = () => {
    setIsActiveItem(0);
    scrollToTop();
  };

  return (
    <>
      <div className="nav_wrapper py_25 bg_primary">
        <div className="container">
          <div className="nav_bar flex jc_sb ai_c p_relative">
            <div className="logo">
              <Link onClick={callTwoFunction} to="/">
                {logo}
              </Link>
            </div>

            <div className="">
              <input
                type="checkbox"
                id="check"
                checked={isChecked}
                onChange={toggleMenu}
              />

              <ul className="menu  flex color_ash fw_400 ai_c">
                {menuItems.map((item, index) => (
                  <li key={Math.random() * 10000000}>
                    <Link
                      className={`py_10 ${
                        isActiveItem === index ? "active_item" : ""
                      }`}
                      to={item.url}
                      onClick={() => handleMenuItemClick(index)}
                      style={{ padding: "10px 10px" }}
                    >
                      {item.title.toUpperCase()}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link target="_blank" to={resumeLink} rel="noreferrer">
                    <SmBtnWithBorder btnName="Resume" />
                  </Link>
                </li>

                <label htmlFor="check" className="close_menu">
                  <IoClose />
                </label>
              </ul>

              <label htmlFor="check" className="open_menu">
                <LuMenu />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
