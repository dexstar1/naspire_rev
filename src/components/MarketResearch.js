import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";

class MarketResearch extends Component {
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
    const thedata = e.target.value;

    console.log(thedata);

    this.setState({ name: thedata });

    localStorage.setItem("name", thedata);
  }

  handleLink = (e) => {
    this.Link.click();
  };

  componentDidMount() {
    const mydt = this.state.name;
    localStorage.setItem("name", mydt);
    this.setState({ loading: true }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/posts?_embed`)
        .then((res) => {
          if (res.data.length) {
            this.setState({ loading: false, posts: res.data, name: mydt });

            this.userData = JSON.parse(localStorage.getItem("user"));

            if (localStorage.getItem("name")) {
              this.setState({
                name: mydt,
              });
            } else {
              this.setState({
                name: mydt,
              });
            }
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
            <h1 className="page-title-desc">MarketResearch</h1>
            {posts.length ? (
              <>
                <div className="article">
                  <div className="latest">
                    {posts.map((post) => (
                      <div className="post">
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

                          <div className="post-author">
                            {post._embedded.author[0].name}
                          </div>
                          <div className="post-time-date">{post.date}</div>
                        </div>
                        <div className="post-content">
                          <div>{renderHTML(post.excerpt.rendered)}</div>
                        </div>
                        <div className="post-image">
                          <img
                            src={
                              post.better_featured_image.media_details.sizes
                                .medium.source_url
                            }
                            alt="naspire"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ads">
                  <div className="cat-box">
                    <img src={"../assets/image9.png"} alt="naspire" />
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

export default MarketResearch;
