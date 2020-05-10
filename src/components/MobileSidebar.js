"use strict";
import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../logo.png";
import Loader from "../loader.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-brands-svg-icons";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import Sidebar from "./Sidebar";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

class MobileSidebar extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    });
  }

  //   openMenu() {
  //     this.setState({ menuOpen: true });
  //   }

  //   closeMenu() {
  //     this.setState({ menuOpen: false });
  //   }

  render() {
    return (
      <OffCanvas
        width={350}
        transitionDuration={100}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"left"}
      >
        <OffCanvasBody style={{ fontSize: "30px" }}>
          <div className="mobile-nav">
            <Link to="/Home">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </Link>
            <HamburgerMenu
              className="mobile-open-drawer"
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </OffCanvasBody>
        <OffCanvasMenu>
          <div className="sidebar-drawer">
            <HamburgerMenu
              className="mobile-close-drawer"
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
            <div className="grid1">
              <li>
                <Link to="/Home">
                  <div className="logo">
                    <img src={Logo} alt="" />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Insights">
                  <div className="nav-items main">Insights</div>
                </Link>
              </li>
              <li>
                <Link to="/marketResearch">
                  <div className="nav-items main">MarketResearch</div>
                </Link>
              </li>
              <li>
                <Link to="/Consulting">
                  <div className="nav-items main">Consulting</div>
                </Link>
              </li>
              <li>
                <Link to="/Subscriptions">
                  <div className="nav-items main">Subscriptions</div>
                </Link>
              </li>
              <li>
                <Link to="/Resources">
                  <div className="nav-items main">Resources</div>
                </Link>
              </li>
              <li>
                <Link to="/Opportunities">
                  <div className="nav-items main">Opportunities</div>
                </Link>
              </li>
            </div>

            <div className="grid2">
              <h3 className="drawer-title">Services</h3>
              <li>
                <a href="https://naspire.com/business-training-consulting/">
                  <div className="nav-items main">Trainings</div>
                </a>
              </li>
              <li>
                <a href="https://naspire.com/cv-editing/">
                  <div className="nav-items main">CV Editing</div>
                </a>
              </li>
              <li>
                <a href="https://naspire.com/interview-coaching/">
                  <div className="nav-items main">Interview Coaching</div>
                </a>
              </li>
            </div>

            <div className="grid3">
              <h3 className="drawer-title">Company</h3>
              <li>
                <a href="https://naspire.com/about/">
                  <div className="nav-items main">About Naspire</div>
                </a>
              </li>
              <li>
                <a href="https://naspire.com/contribute-naspire-com/">
                  <div className="nav-items main">Content Contribution</div>
                </a>
              </li>
              <li>
                <a href="https://naspire.com/advertise-on-naspire/">
                  <div className="nav-items main">Advertise</div>
                </a>
              </li>
            </div>

            <div className="grid4">
              <h3 className="drawer-title">Legal</h3>
              <li>
                <a href="https://naspire.com/terms-of-service/">
                  <div className="nav-items main">Terms of Service</div>
                </a>
              </li>
              <li>
                <a href="https://naspire.com/privacy-policy/">
                  <div className="nav-items main">Privacy Policy</div>
                </a>
              </li>
              <li>
                <Link to="/Faq">
                  <div className="nav-items main">Faq</div>
                </Link>
              </li>
            </div>
          </div>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
      isMenuOpened: !this.state.isMenuOpened,
    });
  }

  //   handleDrawer() {
  //     // toggles the menu opened state
  //     this.setState({ isMenuOpened: !this.state.isMenuOpened });
  //   }
}

export default MobileSidebar;

// function SlideContent() {
//   return (

//   );
// }
