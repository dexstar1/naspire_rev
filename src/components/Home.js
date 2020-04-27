import React from "react";
import "../App.css";
// import Sidebar from "./Sidebar";
// import ReactDOM from "react-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
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
import Consulting from "./Consulting";
import MarketResearch from "./MarketResearch";
import Subscriptions from "./Subscriptions";
import Resources from "./Resources";
import Opportunities from "./Opportunities";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Faq from "./Faq";
import SinglePosts from "./SinglePosts";

const routes = [
  {
    path: "/Home",
    main: () => <Homelayout />,
  },
  {
    path: "/post/:id",
    main: () => <SinglePosts />,
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
    path: "/Consulting",
    main: () => <Consulting />,
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
        {/* <Homelayout /> */}
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
          <li className="more-btn">
            <div className="nav-items main">More ...</div>
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
              <div className="nav-items foot">FAQ</div>
            </Link>
          </li>
          <li>
            <Link to="/Faq">
              <div className="nav-items foot">Careers</div>
            </Link>
          </li>

          <hr></hr>
          <li className="social-contact">
            <div className="svg-n-text">
              <div className="svg">
                <FaPhone />
              </div>
              <div className="social-contact-text">Call Us - 08055364357</div>
            </div>

            <div className="svg-n-text">
              <div className="svg">
                <FaEnvelope />
              </div>
              <div className="social-contact-text">
                Mail Us - vimbai@naspire.com
              </div>
            </div>
          </li>
          <li className="social-foot">
            <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: "0px" }} />
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
        <div style={{ width: "100%", color: "#42446e", marginBottom: "-15px" }}>
          Data is good. Insights are better.
        </div>
        <span
          style={{
            width: "100%",
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Lato",
            color: "#000",
          }}
        >
          Discover the latest business insights and industry trends in Nigeria
        </span>
      </h1>
      <div className="cat-box">
        <img src={"../assets/image1.jpg"} alt="" />
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
    </div>
  );
}
