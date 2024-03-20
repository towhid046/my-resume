/* eslint-disable react/prop-types */
import "./subHeading.css";
const SubHeading = ({heading}) => {
  return (
    <div className="sub_heading_wrapper flex ai_c">
        <div className="sub_heading bg_secondary fz_18 fw_900 color_ash">{heading}</div>
        <div className="after_sub_heading"></div>
    </div>
  );
};
export default SubHeading;
