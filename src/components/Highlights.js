import React, { Component } from "react";
import Pusher from "pusher-js";
import pushid from "pushid";
import "../App.css";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";
import Recent from "./Recent.js";
import $ from "jquery";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";

class Highlights extends Component {
  constructor(props) {
    super(props);
    this.handleStop = this.handleStop.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.state = {
      newsItems: [],
    };
  }

  handleStop() {
    document.getElementById("highlightMarquee").stop();
  }

  handleStart() {
    document.getElementById("highlightMarquee").start();
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=ng&category=business&apiKey=313305d6fc5c4fe89339fa2b0f897f12"
    )
      .then((response) => response.json())
      .then((articles) => {
        console.log(articles);
        localStorage.setItem("newsItems", JSON.stringify(articles));
      })
      .catch((error) => console.log(error));

    const pusher = new Pusher("313305d6fc5c4fe89339fa2b0f897f12", {
      cluster: "eu",
      encrypted: true,
    });
  }

  render() {
    const { loading, newsItems } = this.state;
    const myNews = JSON.parse(localStorage.getItem("newsItems"));

    return (
      <React.Fragment>
        <div className="latest-highlights">
          {/* <h1 className="page-title-desc">Highlights</h1> */}
          <div className="marquee">
            <Toggle
              defaultChecked={this.state.soupIsReady}
              icons={{
                checked: (
                  <FontAwesomeIcon icon={faPlay} onClick={this.handleStart} />
                ),
                unchecked: (
                  <FontAwesomeIcon icon={faPause} onClick={this.handleStop} />
                ),
              }}
              onChange={this.handleSoupChange}
            />
            <marquee
              id="highlightMarquee"
              behavior="scroll"
              direction="left"
              onMouseOver={this.handleStop}
              onMouseOut={this.handleStart}
            >
              <a className="highlights" href={myNews.articles[0].url}>
                <span>{renderHTML(myNews.articles[0].title)}. </span>
              </a>
              <a className="highlights" href={myNews.articles[1].url}>
                <span>{renderHTML(myNews.articles[1].title)}. </span>
              </a>
              <a className="highlights" href={myNews.articles[2].url}>
                <span>{renderHTML(myNews.articles[2].title)}. </span>
              </a>
              <a className="highlights" href={myNews.articles[3].url}>
                <span>{renderHTML(myNews.articles[3].title)}. </span>
              </a>
              <a className="highlights" href={myNews.articles[4].url}>
                <span>{renderHTML(myNews.articles[4].title)}. </span>
              </a>
            </marquee>
          </div>
          {loading && <img className="loader" src={Loader} alt="Loader" />}
        </div>
      </React.Fragment>
    );
  }
}

export default Highlights;
