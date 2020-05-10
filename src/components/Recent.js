import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";

class Recent extends Component {
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
    setTimeout(function () {
      window.location.reload(false);
    }, 2000);
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
        .get(`https://naspire.com/wp-json/wp/v2/posts?_embed&per_page=5`)
        .then((res) => {
          if (res.data.length) {
            console.log(res.data);
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
          <div className="Recent latest">
            <h1 className="page-title-desc side">Recent Posts</h1>
            {posts.length ? (
              <>
                <div className="article">
                  <div className="latest">
                    {posts.map((post) => (
                      <div className="post">
                        <div className="post-image">
                          <img
                            src={
                              post.better_featured_image.media_details.sizes
                                .shop_single.source_url
                            }
                            alt="naspire"
                          />
                        </div>
                        <div className="post-meta" value={post.id}>
                          <Link
                            ref={(Link) => (this.Link = Link)}
                            onClick={() =>
                              localStorage.setItem("name", post.id)
                            }
                            to={`/post/${post.id}`}
                            value={post.id}
                            className="input-class post-title"
                            onFocus={this.onChangeName}
                          >
                            {renderHTML(post.title.rendered)}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {loading && <img className="loader" src={Loader} alt="Loader" />}
          </div>
        </>
      </React.Fragment>
    );
  }
}

export default Recent;
