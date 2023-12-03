import "./navBar.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SmBtnWithBorder from '../../Components/SharedComponents/SmBtnWithBorder';

const NavBar = () => {
  const manuItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Skill", url: "/skill" },
    { title: "Project", url: "/project" },
    { title: "Contact", url: "/contact" },
  ];

  const logo = 'T'
  return (
    <>
      <div className="nav_wrapper py_25">
        <div className="container">
          <div className="nav_bar flex jc_sb ai_c p_relative">
            <div className="logo" ><Link to='/'>{logo}</Link> </div>
            <div className="">
              <input type="checkbox"  id="check"/>
              <ul className="menu  flex gap_25 color_ash fw_400 ai_c">
                {manuItems.map((item) => (
                  <li key={Math.random() * 10000000}>
                    <Link className="py_10" to={item.url}>{item.title.toUpperCase()}</Link>
                  </li>
                ))}
                <li><SmBtnWithBorder btnName={'Resume'}/></li>
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
