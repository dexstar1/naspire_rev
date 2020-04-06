import React from "react";
import "../App.css";
import Sidebar from "./Sidebar";
// import { Route, Switch, } from "react-router-dom";

const Privacy = () => (
  <>
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-7">
      <Sidebar />
    </div>
  </>
);

export default Privacy;
