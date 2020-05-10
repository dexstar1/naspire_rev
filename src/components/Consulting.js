import React, { Component } from "react";
import "../App.css";
import axios from "axios";
// import { Link } from "react-router-dom";
// import renderHTML from "react-render-html";
import Loader from "../loader.gif";

class Consulting extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.Link = this.handleLink.bind(this);
    this.state = {
      loading: false,
      posts: [],
      postID: "",
      id: "",
      error: "",
      name: "",
    };
  }

  onChangeName(e, history) {
    // const thedata = e.target.value;
    // console.log(thedata);
    // this.setState({ name: thedata });
    // localStorage.setItem("name", thedata);
  }

  handleLink = (e) => {
    this.Link.click();
  };

  componentDidMount() {
    // const mydt = this.state.name;
    // localStorage.setItem("name", mydt);
    this.setState({ loading: true }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/posts?_embed`)
        .then((res) => {
          if (res.data.length) {
            this.setState({ loading: false, posts: res.data });

            this.userData = JSON.parse(localStorage.getItem("user"));

            // if (localStorage.getItem("name")) {
            //   this.setState({
            //     name: mydt,
            //   });
            // } else {
            //   this.setState({
            //     name: mydt,
            //   });
            // }
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
    const { loading, posts } = this.state;

    return (
      <React.Fragment>
        <>
          <div className="latest">
            <h1 className="page-title-desc"></h1>
            <form
              className="consulting-form"
              // style={{
              //   backgroundImage:
              //     "url('https://blog.bannersnack.com/wp-content/uploads/2018/05/astronautsitterpreviewdribbble.gif')",
              // }}
            >
              <h3 className="consult-proposition">
                Strategy. Supply Chain. Finance. Trainings
              </h3>
              <input
                type="text"
                className="consult-name"
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                className="consult-email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="consult-message"
                name="consult-message"
                placeholder="Message"
              ></textarea>
              <h3 className="consult-submit">Submit</h3>
            </form>
            {loading && <img className="loader" src={Loader} alt="Loader" />}
          </div>
        </>
      </React.Fragment>
    );
  }
}
export default Consulting;
