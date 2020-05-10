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
import MobileSidebar from "./MobileSidebar";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";

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
      menuOpen: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/media/7025`)
        .then((res) => {
          if (Object.keys(res.data).length) {
            this.setState({ loading: false, image: res.data, menuOpen: false });
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({ loading: false, error: "something wrong" })
        );
    });
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div>
        <MainLayout />
      </div>
    );
  }
}

export default DefaultLayout;

function MainLayout() {
  return (
    <Router>
      <MobileSidebar />
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}
      >
        <Sidebar closeCallback={this.closeMenu.bind(this)} />

        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.closeMenu.bind(this)}
          width={100}
          height={24}
          strokeWidth={3}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
          className="close"
        />
      </CheeseburgerMenu> */}

      {/* <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.closeMenu.bind(this)}
        width={100}
        height={24}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
        className="close"
      /> */}
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
        <div className="headline-text">Data is good. Insights are better.</div>
        <div className="headline-sub-text">
          Discover the latest business insights and industry trends in Nigeria
        </div>
      </h1>
      <Highlights />
      <CasestudyCategory />
      <EmergingCategory />
      <PublicCategory />
      <IndustryCategory />
      <CareerCategory />
      <HomeCarousel />
    </div>
  );
}
