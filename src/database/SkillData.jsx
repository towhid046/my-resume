import { IoBicycle } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { BsPersonWalking } from "react-icons/bs";

const skills = [
  { title: "HTML", percentage: "40%", wid40: { width: "50%" } },
  { title: "CSS", percentage: "20%", wid40: { width: "20%" } },
  { title: "JavaScript", percentage: "40%", wid40: { width: "50%" } },
  { title: "React", percentage: "40%", wid40: { width: "50%" } },
  { title: "XML", percentage: "10%", wid40: { width: "10%" } },
  { title: "SVG", percentage: "40%", wid40: { width: "20%" } },
  { title: "Bootstrap", percentage: "70%", wid40: { width: "70%" } },
];

const hobbies = [
  { icon: <FaBookOpen />, title: "Reading" },
  { icon: <IoBicycle />, title: "Cycling" },
  { icon: <MdAddAPhoto />, title: "Photography" },
  { icon: <BsPersonWalking />, title: "Walking" },
];

export const skillData = { skills, hobbies };
