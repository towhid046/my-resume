import "./navBar.css";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SmBtnWithBorder from "../../Components/SharedComponents/SmBtnWithBorder";
import { manuItems, logo } from "./../../DATABASE/navbar.js";
const NavBar = () => {
  return (
    <>
      <div className="nav_wrapper py_25 bg_secondary">
        <div className="container">
          <div className="nav_bar flex jc_sb ai_c p_relative">
            <div className="logo">
              <a href="#">{logo}</a>
            </div>
            <div className="">
              <input type="checkbox" id="check" />
              <ul className="menu  flex gap_20 color_ash fw_400 ai_c">
                {manuItems.map((item) => (
                  <li key={Math.random() * 10000000}>
                    <a className="py_10" href={item.url}>
                       {item.title.toUpperCase()}
                    </a>
                  </li>
                ))}
                <li>
                  <SmBtnWithBorder btnName={"Resume"} />
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
