import "./navBar.css";
import { Link } from "react-router-dom";
import SmBtnWithBorder from './SmBtnWithBorder';

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
          <div className="nav_bar flex jc_sb ai_c">
            <div className="logo" ><Link to='/'>{logo}</Link> </div>
            <div>
              <ul className="flex gap_25 color_ash fw_400 ai_c">
                {manuItems.map((item) => (
                  <li key={Math.random() * 10000000}>
                    <Link to={item.url}>{item.title.toUpperCase()}</Link>
                  </li>
                ))}
                <SmBtnWithBorder btnName={'Resume'}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
