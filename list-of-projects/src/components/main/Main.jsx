import React from "react";
import List from "../list/List";
import "./Main.scss";
import ProjectDetail from "../projectDetail/ProjectDetail";
import { Routes, Route } from "react-router-dom";
import data from "../../mock.json";

const Main = () => {
  return (
    <div className="main">
      <Routes>
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