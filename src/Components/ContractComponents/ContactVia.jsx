/* eslint-disable react/prop-types */
export const ContactVia = ({ contactWay}) => {
    console.log()
  return (
    <>
      <div  className="contact_card">
        <h2 className="fw_900 fz_26">{contactWay.title}</h2>
        <p className="fw_400 fz_18">{contactWay.name}</p>
      </div>
    </>
  );
};
