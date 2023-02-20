import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      <div className="contact" style={{display: isDisplay ? "block" : "none"}}>
        <div className="modal">Здесь будет форма для связи<span className="close" onClick={handleClick}>&#10008;</span></div>
        <div class="modal-overlay"></div>
      </div>
      
    </div>
  )
}

export default Item;