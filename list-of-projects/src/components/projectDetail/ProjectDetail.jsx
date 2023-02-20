import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProjectDetail.scss";

const ProjectDetail = (props) => {
  const { data } = props;
  const { projectId } = useParams();
  // const project = data.map(item => {if (item.id == projectId) console.log('ура')})
  // console.log(project.title)
  const project = data.find(project => project.id === projectId);
  data.map(item => console.log(item.id))
  console.log(projectId)
  return (
    <div className="detail">
      <h1 className="title">Здесь детальная информация о проекте <span>"{project.title}"</span></h1>
      <Link className="back" to={"/projects"}>Назад</Link>
    </div>
  )
}

export default ProjectDetail