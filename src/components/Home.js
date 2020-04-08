import React from "react";
import "../App.css";
// import Sidebar from "./Sidebar";
// import ReactDOM from "react-dom";
import Logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Insights from "./Insights";
import Advisory from "./Advisory";
import MarketResearch from "./MarketResearch";
import Subscriptions from "./Subscriptions";
import Resources from "./Resources";
import Opportunities from "./Opportunities";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Faq from "./Faq";

const routes = [
  {
    path: "/Home",
    main: () => <Homelayout />,
  },
  {
    path: "/Insights",
    main: () => <Insights />,
  },
  {
    path: "/MarketResearch",
    main: () => <MarketResearch />,
  },
  {
    path: "/Advisory",
    main: () => <Advisory />,
  },
  {
    path: "/Subscriptions",
    main: () => <Subscriptions />,
  },
  {
    path: "/Resources",
    main: () => <Resources />,
  },
  {
    path: "/Opportunities",
    main: () => <Opportunities />,
  },
  {
    path: "/Privacy",
    main: () => <Privacy />,
  },
  {
    path: "/Terms",
    main: () => <Terms />,
  },
  {
    path: "/Faq",
    main: () => <Faq />,
  },
];

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <MainLayout />
        <Homelayout />
      </>
    );
  }
}

export default DefaultLayout;

function MainLayout() {
  return (
    <Router>
      <div className="sidebar">
        <div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <li>
            <Link to="/Home">
              <div className="nav-items main">Home</div>
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
            <Link to="/advisory">
              <div className="nav-items main">Advisory</div>
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
          <li className="more-btn">
            <div className="nav-items main">More</div>
          </li>
          <hr></hr>
          <li>
            <Link to="/Privacy">
              <div className="nav-items foot">Privacy</div>
            </Link>
          </li>
          <li>
            <Link to="/Terms">
              <div className="nav-items foot">Terms</div>
            </Link>
          </li>
          <li>
            <Link to="/Faq">
              <div className="nav-items foot">Faq</div>
            </Link>
          </li>
          <li>
            <Link to="/Faq">
              <div className="nav-items foot">Careers</div>
            </Link>
          </li>
          <li className="social-foot">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <hr></hr>
          <h6 className="copyright">
            Copyright &copy;, Naspire, Sam Brooks Limited, 2020
          </h6>
        </div>
      </div>

      <div className="main">
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function Homelayout() {
  return (
    <div className="home">
      <h1 className="page-title-desc">
        <div style={{ width: "60%" }}>
          Discover the latest business insights and industry trends in Nigeria
        </div>
      </h1>
      <div className="cat-box">
        <img src={require("../assets/image1.jpg")} alt="" />
        <div className="post-cat">Case Studies</div>
        <h3>The marlian market</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image2.jpg")} alt="" />
        <div className="post-cat">Emerging market and opportunities</div>
        <h3>Naspire quarterly insights</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image3.jpg")} alt="" />
        <div className="post-cat">Public Sector</div>
        <h3>States, FG, LGA Government agencies, BOI, SMEDAN</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image4.jpg")} alt="" />
        <div className="post-cat">FEET</div>
        <h3>Footbal, Entrepreneurship, Entertainment, Technology</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image5.jpg")} alt="" />
        <div className="post-cat">Advertisement</div>
        <h3>Advertise both Naspire and other companies/businesses</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image6.jpg")} alt="" />
        <div className="post-cat">Career related</div>
        <h3>Skills for the future</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image7.jpg")} alt="" />
        <div className="post-cat">Industry Scoop</div>
        <h3>Beer industry, Agric Sector, Sex Sector</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image8.jpg")} alt="" />
        <div className="post-cat">Resources</div>
        <h3>15 businesses you can start with little fundings</h3>
      </div>
    </div>
  );
}
