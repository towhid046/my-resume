/* eslint-disable react/prop-types */
import "./buttons.css";
export default function SmBtnWithBorder({ btnName}) {
  return (
    <>
      <div>
          <button className="sm_btn_with_border">{btnName}</button>
      </div>
    </>
  );
}
