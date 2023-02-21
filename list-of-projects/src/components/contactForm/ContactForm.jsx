import React from "react";
import "./ContactForm.scss";

const ContactForm = (props) => {
  const { style, onClick } = props;
  return (
    <div className="contact" style={style}>
        <div className="modal">Здесь будет форма для связи<span className="close" onClick={onClick}>&#10008;</span></div>
        <div className="modal-overlay"></div>
    </div>
  )
}

export default ContactForm;