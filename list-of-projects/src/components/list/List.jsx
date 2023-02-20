import React from "react";
import "./List.scss";
import Item from "../item/Item";

const List = (props) => {
  const { data } = props;
  return (
    <div className="list">
      {data.map(item => {
        return (
          <Item id={item.id} title={item.title} description={item.description} button={item.button} key={item.title}/>
        )
      })}
    </div>
  )
}

export default List;