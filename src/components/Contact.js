import React from "react";
import "./Contact.css";

const online = true;
const avatar =
  "https://img2.freepng.fr/20180504/izw/kisspng-bitstrips-avatar-sticker-snap-inc-cheering-grads-5aec1eba316ba6.9635587915254238022024.jpg";
function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="" />
      <div className="status">
        <h3 className="name">Baptiste Grias</h3>
        <div className={online ? "status-online" : "status-offline"}></div>
        <p className="status-text">{online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}

export default Contact;
