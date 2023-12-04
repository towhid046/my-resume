import SubHeading from "../SharedComponents/SubHeading";
import BigBtnWithoutBorder from "./../SharedComponents/BigBtnWithoutBorder";
import "./contactDetails.css";

export default function ContactDetails() {
  
  const contractTitle = `
        I am interested in working with any company that thinks my skill will be helpful for them. 
        If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.`;

  const contactWays = [
    { title: "Email", name: "tamzidislam788@gmail.com" },
    { title: "Phone", name: "++0 1928182891" },
    { title: "Skype", name: "tawhid046pad@gmail.com" },
    { title: "Address", name: "Dhaka, Bangladesh" },
  ];

  return (
    <>
      <div id="contact">
        <div className="container contact_section_wrapper color_ash grid jc-sb py_100 gap_20">
          <div className="contact_title">
            <p className="lh_36 mb_30 fw_400 fz_18">{contractTitle}</p>
            <BigBtnWithoutBorder btnName={"Contact me"} />
          </div>

          <div className="contract_way flex flex_colmun gap_20">
            {contactWays.map((contactway) => (
              <div key={Math.random() * 100000} className="contact_card">
                <h2 className="fw_900 fz_26">{contactway.title}</h2>
                <p className="fw_400 fz_18">{contactway.name}</p>
              </div>
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
