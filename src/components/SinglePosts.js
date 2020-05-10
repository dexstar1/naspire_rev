import React from "react";
import renderHTML from "react-render-html";
import Loader from "../loader.gif";
import axios from "axios";
import Related from "./Related";
import Newsletter from "./Newsletter";
import Recent from "./Recent.js";

class SinglePost extends React.Component {
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

    // this.setState({ name: thedata });

    // localStorage.setItem("name", thedata);
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

    this.setState({ loading: true }, () => {
      axios
        .get(`https://naspire.com/wp-json/wp/v2/posts/${localItems}`)
        .then((res) => {
          console.log(res.data);
          if (Object.keys(res.data).length) {
            this.setState({ loading: false, post: res.data, name: localItems });
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({
            loading: false,
            error: "something is wrong, <Link to=" / ">Go back</Link>",
          })
        );
    });
  }

  render() {
    const { loading, post, error } = this.state;

    function NewsletterPop() {
      if (localStorage.getItem("email")) {
        return <h3></h3>;
      } else {
        return (
          <div className="newsletter-popUp">
            <Newsletter />
          </div>
        );
      }
    }
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
            <NewsletterPop />
            <div className="article">
              <div className="latest">
                <div className="mt-5 posts single-post">
                  <div key={post.id}>
                    <h1 className="page-title-desc single">
                      {post.title.rendered}
                    </h1>
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
                  <br></br>
                  <Recent />
                </div>
              </div>
            </div>
            <Related />
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
