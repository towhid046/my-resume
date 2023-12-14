import { useState } from "react";
import "./navBar.css";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SmBtnWithBorder from "../../Components/SharedComponents/SmBtnWithBorder";
import {navData} from './../../database/navbar';
const {logo, menuItems, resumeLink} = navData;

const NavBar = () => {
  const [isChecked, setChecked] = useState(false);
  const [isActiveItem, setIsActiveItem] = useState(null);

  const toggleMenu = () => {
    setChecked(!isChecked);
  };

  // setActiveItem:
  const handleMenuItemClick = (index) => {
    setIsActiveItem(index)
    setChecked(false)
  }

  return (
    <>
      <div className="nav_wrapper py_25 bg_primary">
        <div className="container">
          <div className="nav_bar flex jc_sb ai_c p_relative">
            <div className="logo">
              <a href="#">{logo}</a>
            </div>

            <div className="">
              <input type="checkbox" id="check" checked={isChecked} onChange={toggleMenu} />
              <ul className="menu  flex color_ash fw_400 ai_c">
                {menuItems.map((item, index) => (
                  <li  key={Math.random() * 10000000}>
                    <a
                      className={`py_10 ${isActiveItem === index ? 'active_item' : ''}`}
                      href={item.url}
                      onClick={() => handleMenuItemClick(index)}
                      style={{padding: '10px 10px'}}
                    >
                      {item.title.toUpperCase()}
                    </a>
                  </li>
                ))}

                <li>
                  <SmBtnWithBorder 
                  btnName="Resume" 
                  link={resumeLink}
                  />
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

export default NavBar;
