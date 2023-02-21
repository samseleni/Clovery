import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactForm from "../contactForm/ContactForm";

const Item = (props) => {
  const {title, description, button, id} = props;
  const [isDisplay, setIsDisplay] = useState(false);
  const handleClick = () => {
    setIsDisplay(!isDisplay);
  }
  return (
    <div className="item">
      <div className="content">
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
        {button !== "Оставить контакты" ? 
          <Link to={`/projects/${id}`}> 
            <button className="btn">{button} &#8594;</button>
          </Link> :
          <button className="btn" onClick={handleClick}>{button} &#8594;</button>
        }
      </div>
      <ContactForm style={{display: isDisplay ? "block" : "none"}} onClick={handleClick}/>
    </div>
  )
}

export default Item;