import React from "react";
import "../App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
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
import HomeCarousel from "./Carousel";
import CasestudyCategory from "./CasestudyCategory";
import EmergingCategory from "./Emerging";
import PublicCategory from "./PublicCategory";
import IndustryCategory from "./industryCategory";
import CareerCategory from "./CareerCategory";
import Highlights from "./Highlights";

const routes = [
  {
    path: "/",
    exact: "/",
    main: () => <Homelayout />,
  },
  {
    path: "/Home",
    main: () => <Homelayout />,
  },
  {
    path: "/Highlights",
    main: () => <Highlights />,
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
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      image: {},
      postID: "",
      error: "",
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/media/7025`)
        .then((res) => {
          if (Object.keys(res.data).length) {
            this.setState({ loading: false, image: res.data });
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({ loading: false, error: "something wrong" })
        );
    });
  }

  render() {
    return <MainLayout />;
  }
}

export default DefaultLayout;

function MainLayout() {
  // const { loading, image, error } = this.state;

  return (
    <Router>
      <div className="sidebar">
        <Sidebar />
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
      <h1 className="page-title-desc home">
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
      <Highlights />
      <CasestudyCategory />
      <EmergingCategory />
      <PublicCategory />
      <IndustryCategory />
      <CareerCategory />
      {/* <div className="cat-box">
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
        <div className="post-cat">Industry Scoop</div>
        <h3>Beer Industry, Agric Sector, Sex Sector</h3>
      </div>
      <div className="cat-box">
        <img src={require("../assets/image6.jpg")} alt="naspire" />
        <div className="post-cat">Career related</div>
        <h3>Skills for the future</h3>
      </div> */}

      {/* <img
          src="https://naspire.com/wp-content/uploads/2020/02/naspire-ebook.png"
          alt=""
        />
        <div className="post-cat">Industry Scoop</div>
        <h3>Beer industry, Agric Sector, Sex Sector</h3> */}
      <HomeCarousel />
    </div>
  );
}
