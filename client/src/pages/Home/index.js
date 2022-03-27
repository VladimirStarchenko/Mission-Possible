import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_CHARITIES } from "../utils/queries.js";
import Footer from "../Footer";

function Home() {
  // const { data, loading } = useQuery(GET_CHARITIES);

  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }
  // const { allCharities } = data;

  return (
    <>
      {/* {allCharities.map((charity) => {
        return (
          <ul key={Math.random()}>
            <li>
              <strong>{charity.name}</strong>
            </li>
            <li>{charity.mission}</li>
            <li>{charity.charityNavigatorURL}</li>
            <li>{charity.websiteURL}</li>
          </ul>
        );
      })} */}

      {/* <!-- Carousel Start --> */}
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="/assets/img/carousel-1.jpg" alt="Image" />
                {/* <img src="../img/carousel-1.jpg" alt="Image" /> */}
              </div>
              <div className="carousel-text">
                <h1>Let's be kind for children</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac consequat at lectus in
                  malesuada
                </p>
                <div className="carousel-btn">
                  <a className="btn btn-custom" href="#">
                    Donate Now
                  </a>
                  <a
                    className="btn btn-custom btn-play"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="/assets/img/carousel-2.jpg" alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>Get Involved with helping hand</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis, orci sodales varius fermentum,
                  tortor
                </p>
                <div className="carousel-btn">
                  <a className="btn btn-custom" href="#">
                    Donate Now
                  </a>
                  <a
                    className="btn btn-custom btn-play"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="/assets/img/carousel-3.jpg" alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>Bringing smiles to millions</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam. Proin
                  pellentesque odio
                </p>
                <div className="carousel-btn">
                  <a className="btn btn-custom" href="#">
                    Donate Now
                  </a>
                  <a
                    className="btn btn-custom btn-play"
                    data-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-target="#videoModal"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Video Modal Start--> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      {/* <!-- About Start --> */}
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-parallax="scroll"
                data-image-src="/assets/img/about.jpg"
              ></div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <p>Learn About Us</p>
                <h2>Worldwide non-profit charity organization</h2>
              </div>
              <div className="about-tab">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="pill"
                      href="#tab-content-1"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="pill"
                      href="#tab-content-2"
                    >
                      Mission
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="pill"
                      href="#tab-content-3"
                    >
                      Vision
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab-content-1" className="container tab-pane active">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    vitae pellentesque turpis. Donec in hendrerit dui, vel
                    blandit massa. Ut vestibulum suscipit cursus. Cras quis
                    porta nulla, ut placerat risus. Aliquam nec magna eget velit
                    luctus dictum. Phasellus et felis sed purus tristique
                    dignissim. Morbi sit amet leo at purus accumsan
                    pellentesque. Vivamus fermentum nisi vel dapibus blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div id="tab-content-2" className="container tab-pane fade">
                    Sed tincidunt, magna ut vehicula volutpat, turpis diam
                    condimentum justo, posuere congue turpis massa in mi. Proin
                    ornare at massa at fermentum. Nunc aliquet sed nisi iaculis
                    ornare. Nam semper tortor eget est egestas, eu sagittis nunc
                    sodales. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Praesent bibendum sapien sed purus molestie
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </div>
                  <div id="tab-content-3" className="container tab-pane fade">
                    Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut
                    sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit
                    enim. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Sed condimentum semper turpis vel facilisis. Nunc
                    vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi
                    at, venenatis quam. Praesent egestas pretium enim sit amet
                    finibus. Curabitur at erat molestie, tincidunt lorem eget,
                    consequat ligula.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>What We Do?</p>
            <h2>We believe that we can save more lifes with you</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-diet"></i>
                </div>
                <div className="service-text">
                  <h3>Healthy Food</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-water"></i>
                </div>
                <div className="service-text">
                  <h3>Pure Water</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-healthcare"></i>
                </div>
                <div className="service-text">
                  <h3>Health Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-education"></i>
                </div>
                <div className="service-text">
                  <h3>Primary Education</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="service-text">
                  <h3>Residence Facilities</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-social-care"></i>
                </div>
                <div className="service-text">
                  <h3>Social Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phase nec preti facils
                    ornare velit non metus tortor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Facts Start --> */}
      <div
        className="facts"
        data-parallax="scroll"
        data-image-src="/assets/img/facts.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-home"></i>
                <div className="facts-text">
                  <h3 className="facts-plus" data-toggle="counter-up">
                    150
                  </h3>
                  <p>Countries</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-charity"></i>
                <div className="facts-text">
                  <h3 className="facts-plus" data-toggle="counter-up">
                    400
                  </h3>
                  <p>Volunteers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-kindness"></i>
                <div className="facts-text">
                  <h3 className="facts-dollar" data-toggle="counter-up">
                    10000
                  </h3>
                  <p>Our Goal</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="facts-item">
                <i className="flaticon-donation"></i>
                <div className="facts-text">
                  <h3 className="facts-dollar" data-toggle="counter-up">
                    5000
                  </h3>
                  <p>Raised</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}

      {/* <!-- Causes Start --> */}
      <div className="causes">
        <div className="container">
          <div className="section-header text-center">
            <p>Popular Causes</p>
            <h2>Let's know about charity causes around the world</h2>
          </div>
          <div className="owl-carousel causes-carousel">
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/causes-1.jpg" alt="Image" />
              </div>
              <div className="causes-progress">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <p>
                    <strong>Raised:</strong> $100000
                  </p>
                  <p>
                    <strong>Goal:</strong> $50000
                  </p>
                </div>
              </div>
              <div className="causes-text">
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasell nec pretium mi.
                  Curabit facilis ornare velit non vulputa
                </p>
              </div>
              <div className="causes-btn">
                <a className="btn btn-custom">Learn More</a>
                <a className="btn btn-custom">Donate Now</a>
              </div>
            </div>
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/causes-2.jpg" alt="Image" />
              </div>
              <div className="causes-progress">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <p>
                    <strong>Raised:</strong> $100000
                  </p>
                  <p>
                    <strong>Goal:</strong> $50000
                  </p>
                </div>
              </div>
              <div className="causes-text">
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasell nec pretium mi.
                  Curabit facilis ornare velit non vulputa
                </p>
              </div>
              <div className="causes-btn">
                <a className="btn btn-custom">Learn More</a>
                <a className="btn btn-custom">Donate Now</a>
              </div>
            </div>
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/causes-3.jpg" alt="Image" />
              </div>
              <div className="causes-progress">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <p>
                    <strong>Raised:</strong> $100000
                  </p>
                  <p>
                    <strong>Goal:</strong> $50000
                  </p>
                </div>
              </div>
              <div className="causes-text">
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasell nec pretium mi.
                  Curabit facilis ornare velit non vulputa
                </p>
              </div>
              <div className="causes-btn">
                <a className="btn btn-custom">Learn More</a>
                <a className="btn btn-custom">Donate Now</a>
              </div>
            </div>
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/causes-4.jpg" alt="Image" />
              </div>
              <div className="causes-progress">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <p>
                    <strong>Raised:</strong> $100000
                  </p>
                  <p>
                    <strong>Goal:</strong> $50000
                  </p>
                </div>
              </div>
              <div className="causes-text">
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasell nec pretium mi.
                  Curabit facilis ornare velit non vulputa
                </p>
              </div>
              <div className="causes-btn">
                <a className="btn btn-custom">Learn More</a>
                <a className="btn btn-custom">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Causes End --> */}

      {/* <!-- Donate Start --> */}
      <div
        className="donate"
        data-parallax="scroll"
        data-image-src="/assets/img/donate.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="donate-content">
                <div className="section-header">
                  <p>Donate Now</p>
                  <h2>Let's donate to needy people for better lives</h2>
                </div>
                <div className="donate-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non. Aliquam metus tortor,
                    auctor id gravida, viverra quis sem. Curabitur non nisl nec
                    nisi maximus. Aenean convallis porttitor. Aliquam interdum
                    at lacus non blandit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="donate-form">
                <form>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-custom active">
                      <input type="radio" name="options" /> $10
                    </label>
                    <label className="btn btn-custom">
                      <input type="radio" name="options" /> $20
                    </label>
                    <label className="btn btn-custom">
                      <input type="radio" name="options" /> $30
                    </label>
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">
                      Donate Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donate End --> */}

      {/* <!-- Event Start --> */}
      <div className="event">
        <div className="container">
          <div className="section-header text-center">
            <p>Upcoming Events</p>
            <h2>Be ready for our upcoming charity events</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="event-item">
                <img src="/assets/img/event-1.jpg" alt="Image" />
                <div className="event-content">
                  <div className="event-meta">
                    <p>
                      <i className="fa fa-calendar-alt"></i>01-Jan-45
                    </p>
                    <p>
                      <i className="far fa-clock"></i>8:00 - 10:00
                    </p>
                    <p>
                      <i className="fa fa-map-marker-alt"></i>New York
                    </p>
                  </div>
                  <div className="event-text">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                      facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn btn-custom" href="#">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-item">
                <img src="/assets/img/event-2.jpg" alt="Image" />
                <div className="event-content">
                  <div className="event-meta">
                    <p>
                      <i className="fa fa-calendar-alt"></i>01-Jan-45
                    </p>
                    <p>
                      <i className="far fa-clock"></i>8:00 - 10:00
                    </p>
                    <p>
                      <i className="fa fa-map-marker-alt"></i>New York
                    </p>
                  </div>
                  <div className="event-text">
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                      facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn btn-custom" href="#">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Event End --> */}

      {/* <!-- Team Start --> */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Meet Our Team</p>
            <h2>Awesome guys behind our charity activities</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-1.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Donald John</h2>
                  <p>Founder & CEO</p>
                  <div className="team-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-2.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>Chef Executive</p>
                  <div className="team-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-3.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>Thomas Olsen</h2>
                  <p>Chef Advisor</p>
                  <div className="team-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-4.jpg" alt="Team Image" />
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Volunteer Start --> */}
      <div
        className="volunteer"
        data-parallax="scroll"
        data-image-src="/assets/img/volunteer.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="volunteer-form">
                <form>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      placeholder="Why you want to become a volunteer?"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-custom" type="submit">
                      Become a volunteer
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="volunteer-content">
                <div className="section-header">
                  <p>Become A Volunteer</p>
                  <h2>Let’s make a difference in the lives of others</h2>
                </div>
                <div className="volunteer-text">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non. Aliquam metus tortor,
                    auctor id gravida, viverra quis sem. Curabitur non nisl nec
                    nisi maximus. Aenean convallis porttitor. Aliquam interdum
                    at lacus non blandit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Volunteer End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="testimonial">
        <div className="container">
          <div className="section-header text-center">
            <p>Testimonial</p>
            <h2>What people are talking about our charity activities</h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <div className="testimonial-profile">
                <img src="/assets/img/testimonial-1.jpg" alt="Image" />
                <div className="testimonial-name">
                  <h3>Person Name</h3>
                  <p>Profession</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor, auctor id gravid
                  vivera quis
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-profile">
                <img src="/assets/img/testimonial-2.jpg" alt="Image" />
                <div className="testimonial-name">
                  <h3>Person Name</h3>
                  <p>Profession</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor, auctor id gravid
                  vivera quis
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-profile">
                <img src="/assets/img/testimonial-3.jpg" alt="Image" />
                <div className="testimonial-name">
                  <h3>Person Name</h3>
                  <p>Profession</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor, auctor id gravid
                  vivera quis
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-profile">
                <img src="/assets/img/testimonial-4.jpg" alt="Image" />
                <div className="testimonial-name">
                  <h3>Person Name</h3>
                  <p>Profession</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasel preti mi facilis
                  ornare velit non vulputa. Aliqu metus tortor, auctor id gravid
                  vivera quis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Contact Start --> */}
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>Contact for any query</h2>
          </div>
          <div className="contact-img">
            <img src="/assets/img/contact.jpg" alt="Image" />
          </div>
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn btn-custom"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      <Footer />
    </>
  );
}

export default Home;
