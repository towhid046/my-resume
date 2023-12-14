import "./buttons.css";
import { Link } from "react-router-dom";
export default function SmBtnWithBorder({ btnName, link }) {
  return (
    <>
      <div>
        <Link target="_blank" to={link}>
          <button className="sm_btn_with_border">{btnName}</button>
        </Link>
      </div>
    </>
  );
}
