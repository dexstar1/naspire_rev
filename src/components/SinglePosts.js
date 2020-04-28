import React from "react";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";
import axios from "axios";
import Privacy from "./Privacy";

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
    const localItems = localStorage.getItem("name");
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
                <div className="mt-5 posts single-post">
                  <div key={post.id}>
                    <h1 className="page-title-desc">{post.title.rendered}</h1>
                    <div>{renderHTML(post.content.rendered)}</div>
                  </div>
                </div>
              </div>
              <div className="ads">
                <div className="cat-box">
                  <img
                    src="https://blog.bannersnack.com/wp-content/uploads/2018/05/astronautsitterpreviewdribbble.gif"
                    alt="advertise with us"
                  />
                </div>
              </div>
            </div>
            <Privacy />
          </>
        ) : (
          ""
        )}

        {loading && <img className="loader" src={Loader} alt="Loader" />}
      </React.Fragment>
    );
  }
}

export default SinglePost;
