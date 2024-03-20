import SubHeading from "../../SharedComponents/SubHeading";
import BigBtnWithoutBorder from "../../SharedComponents/BigBtnWithoutBorder";
import { contactData } from "../../database/contactData";
import { ContactVia } from './ContactVia'
import "./contact.css";


export default function Contact() {
  const { contactTitle, contactWays } = contactData;
  return (
    <>
      <div id="contact">
        <div className="container contact_section_wrapper color_ash grid jc-sb py_100 gap_20">

          <div className="contact_title">
            <p className="lh_36 mb_30 fw_400 fz_18">{contactTitle}</p>
            <BigBtnWithoutBorder btnName={"Contact me"} />
          </div>

          <div className="contract_way flex flex_colmun gap_20">
            {contactWays.map((contactWay) => (
              <ContactVia
                key={Math.random() * 200000}
                contactWay={contactWay}
              />
            ))}
          </div>

          <div className="contract_heading_wrapper p_relative">
            <div className="contract_head">
              <SubHeading heading={"Contact"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
