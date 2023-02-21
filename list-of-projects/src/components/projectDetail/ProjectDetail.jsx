import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ProjectDetail.scss";

const ProjectDetail = (props) => {
  const { data } = props;
  const { projectId } = useParams();
  const project = data.find(project => project.id === projectId);

  return (
    <div className="detail">
      <h1 className="title">Здесь детальная информация о проекте <span>"{project.title}"</span></h1>
      <Link className="back" to={"/projects"}>Назад</Link>
    </div>
  )
}

export default ProjectDetail