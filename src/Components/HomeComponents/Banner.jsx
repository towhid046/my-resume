import { FaGithub, FaCodepen, FaLinkedin, } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import SubHeading from './../SharedComponents/SubHeading';
import './banner.css'
import BigBtnWithBorder from "../SharedComponents/BigBtnWithBorder";
import BigBtnWithoutBorder from "../SharedComponents/BigBtnWithoutBorder";

const Banner = () => {
  const socialLinks = [
    {icon: <FaGithub />, url: 'https://github.com/towhid046'},
    {icon: <FaCodepen/>, url: 'https://github.com/towhid046'},
    {icon: <FaLinkedin/>, url: 'https://codepen.io/login'},
    {icon: <FaGithub />, url: 'https://github.com/towhid046'},
    {icon: <FaGithub />, url: 'https://github.com/towhid046'},
  ]
  const lists = [
    {listIcon:<GoDotFill /> , title: 'Web Developer'},
    {listIcon:<GoDotFill /> , title: 'Web Designer'},
    {listIcon: <GoDotFill /> , title: 'Web Learner'},
  ]

  return (
    <>
      <div className="hero_area">
        <header className="container hero_wrapper grid ">
          <aside className='banner_asid flex flex_colmun p_relative'>
            <ul className='social_links'>
              {
                socialLinks.map(link=> (<li key={Math.random() * 100000}><Link to={link.url}>{link.icon}</Link></li>))
              }
            </ul>

            <div className="follow_me_heading p_relative">
            <div className='sub_follow_me'>
                <SubHeading heading={'follow me'}/>
            </div>
            </div>
          </aside>

          <div className="hero_content">
              <h3 className="fw_400 bg_green fz_22">Hello! I am</h3>
              <h1 className="banner_my_name fw_900 color_white">Towhid Islam</h1>
              <h2 className="fw_700 fz_25 bg_green mb_5">Font end Developer</h2>
              <ul className=" flex ai_c mb_30">
                {
                  lists.map(list=> (<li className="fx_18 fw_400 color_white" key={Math.random() * 10000000}><span className='bg_green'>{list.listIcon}</span> <span>{list.title}</span> </li>))
                }
              </ul>
              <div className="flex gap_20">
                <BigBtnWithoutBorder btnName={'Resume me'}/>
                <BigBtnWithBorder btnName={'About me'}/>
              </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Banner;
