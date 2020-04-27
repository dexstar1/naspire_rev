import React from "react";
// import Navbar from "./Navbar";
import renderHTML from "react-render-html";
// import Moment from "react-moment";
// import Home from "./Home";
import Loader from "../loader.gif";
import axios from "axios";
import Privacy from "./Privacy";
// import { getPosts } from "./GetData";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.Link = this.handleLink.bind(this);
    this.state = {
      loading: false,
      post: {},
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

  createMarkup = (data) => ({
    __html: data,
  });

  componentDidMount() {
    // const wordPressSiteURL = getPosts.siteUrl;
    // const postID = localStorage.getItem("id");
    // const localItems = JSON.parse(localStorage.getItem("user"));
    const localItems = localStorage.getItem("name");
    // const sObj = JSON.stringify(localItems.posts);
    // const IdItem = JSON.stringify(sObj.id);
    console.log(localItems);

    this.setState({ loading: true, localItems: localItems }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/posts/${localItems}`)
        .then((res) => {
          console.log(res.data);
          if (Object.keys(res.data).length) {
            this.setState({ loading: false, post: res.data });
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({ loading: false, error: err.response.data.message })
        );
    });
  }

  render() {
    const { loading, post, error } = this.state;

    return (
      <React.Fragment>
        {/* <Navbar />  */}
        {error && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={this.createMarkup(error)}
          />
        )}
        {Object.keys(post).length ? (
          <>
            <div className="article">
              <div className="latest">
                <div className="mt-5 posts">
                  <div key={post.id}>
                    <h1 className="page-title-desc">{post.title.rendered}</h1>
                    <div>{renderHTML(post.content.rendered)}</div>
                  </div>
                </div>
              </div>
            </div>
            <Privacy />
          </>
        ) : (
          ""
        )}

        <div className="ads">
          <div className="cat-box">
            <img src={"../assets/image9.png"} alt="naspire" />
          </div>
        </div>
        {loading && <img className="loader" src={Loader} alt="Loader" />}
      </React.Fragment>
    );
  }
}

export default SinglePost;
