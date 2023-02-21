import React from "react";
import List from "../list/List";
import "./Main.scss";
import ProjectDetail from "../projectDetail/ProjectDetail";
import { Routes, Route } from "react-router-dom";
import data from "../../mock.json";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path={"/"} element={
          <Link to="/projects" style={{fontSize: "30px", color: "inherit"}}>
            <span>Список открытых проектов</span>
          </Link>
          } 
        />
        <Route path={"/projects"} element={
          <>
            <h1 className="main-title">Открытые проекты</h1>
            <List data={data}/>
          </>
          } 
        />
        <Route path={"/projects/:projectId"} element={<ProjectDetail data={data}/>} />
      </Routes>
    </div>
  )
}

export default Main;