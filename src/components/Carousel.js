import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

class HomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
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
    this.setState({ name: thename });
    this.setState({ email: theemail });
    localStorage.setItem("LoggedIn", true);
    localStorage.setItem("name", thename);
    localStorage.setItem("email", theemail);
  };

  //   componentDidMount() {
  //   }

  render() {
    return (
      <div className="cat-box">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100 home-advert"
                    src="https://blog.bannersnack.com/wp-content/uploads/2018/05/astronautsitterpreviewdribbble.gif"
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <form onSubmit={this.handleSubmit}>
                    <h4>Subscribe to get first hand reports</h4>
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
                    />
                  </form>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default HomeCarousel;
