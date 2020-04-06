import React, { Component } from "react";
import "../App.css";
import Logo from "../logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <Router>
          <Link to="/">
            <div className="nav-items">Home</div>
          </Link>
          <Link to="/Insights">
            <div className="nav-items main">Insights</div>
          </Link>
          <Link to="/marketResearch">
            <div className="nav-items main">MarketResearch</div>
          </Link>
          <Link to="/advisory">
            <div className="nav-items main">Advisory</div>
          </Link>
          <Link to="/Subscriptions">
            <div className="nav-items main">Subscriptions</div>
          </Link>
          <Link to="/Resources">
            <div className="nav-items main">Resources</div>
          </Link>
          <Link to="/Opportunities">
            <div className="nav-items main">Opportunities</div>
          </Link>
          <Link to="/Privacy" className="company-foot">
            <div className="nav-items foot">Privacy</div>
          </Link>
          <Link to="/Terms">
            <div className="nav-items foot">Terms</div>
          </Link>
          <Link to="/Faq">
            <div className="nav-items foot">Faq</div>
          </Link>
        </Router>
      </div>
    );
  }
}

export default Sidebar;
