import React from "react";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";
import axios from "axios";
import Privacy from "./Privacy";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";

class IndustryCategory extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.Link = this.handleLink.bind(this);
    this.state = {
      email: "",
      userNiceName: "",
      userEmail: "",
      loading: false,
      post: {},
      postID: "",
      id: "",
      error: "",
      name: "",
    };
  }

  // handleOnChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   const thename = this.state.name;
  //   const theemail = this.state.email;
  //   this.setState({ name: thename });
  //   this.setState({ email: theemail });
  //   localStorage.setItem("LoggedIn", true);
  //   localStorage.setItem("name", thename);
  //   localStorage.setItem("email", theemail);
  // };

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
    const localItems = localStorage.getItem("name");
    console.log(localItems);

    this.setState({ loading: true, localItems: localItems }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/posts/6435`)
        .then((res) => {
          console.log(res.data);
          if (Object.keys(res.data).length) {
            this.setState({ loading: false, post: res.data });
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({ loading: false, error: "something is wrong" })
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
            <div key={post.id} className="cat-box">
              <>
                <div className="feat-cat-img">
                  <img
                    src={
                      post.better_featured_image.media_details.sizes.medium
                        .source_url
                    }
                    alt="naspire"
                  />
                </div>
                <Link
                  ref={(Link) => (this.Link = Link)}
                  onClick={() => localStorage.setItem("name", post.id)}
                  to={`/post/${post.id}`}
                  value={post.id}
                  className="input-class post-title"
                  onFocus={this.onChangeName}
                >
                  <h5 className="post-cat">{post.title.rendered}</h5>
                </Link>
              </>
            </div>
          </>
        ) : (
          ""
        )}

        {loading && <img className="loader" src={Loader} alt="Loader" />}
      </React.Fragment>
    );
  }
}

export default IndustryCategory;
