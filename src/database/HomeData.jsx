import { FaGithub, FaCodepen, FaLinkedin, } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
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

export const homeData = {socialLinks, lists}