import React from "react";
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBContainer,
// } from "mdbreact";
import { Link } from "react-router-dom";

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      userNiceName: "",
      userEmail: "",
      loggedIn: false,
      loading: false,
      error: "",
    };
  }

  createMarkup = (data) => ({
    __html: data,
  });

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const thename = this.state.name;
    const theemail = this.state.email;
    this.setState({ subname: thename });
    this.setState({ email: theemail });
    localStorage.setItem("LoggedIn", true);
    localStorage.setItem("subName", thename);
    localStorage.setItem("email", theemail);
  };

  //   componentDidMount() {
  //   }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="newsletter-popUpForm">
          <h4>Subscribe to get read more</h4>
          <input
            type="text"
            name="name"
            className="newsletter-name"
            placeholder="Your Name"
            onChange={this.handleOnChange}
          />
          <input
            type="email"
            name="email"
            className="newsletter-email"
            placeholder="Your Email"
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            name="submit"
            className="newsletter-submit"
            value="Subscribe"
            onClick={() => window.location.reload(false)}
          />
          <Link to="/Home">
            <h3 className="no-newsletter">
              No, thanks I dont want to Subscribe
            </h3>
          </Link>
        </form>
      </>
    );
  }
}

export default Newsletter;
