import React from "react";
import "../App.css";
import Sidebar from "./Sidebar";
// import { Route, Switch, } from "react-router-dom";

const Opportunities = () => (
  <>
    <div className="col-3">
      <Sidebar />
    </div>
    <div className="col-7">
      <Sidebar />
    </div>
  </>
);

export default Opportunities;
