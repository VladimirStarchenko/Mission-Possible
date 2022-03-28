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

      
    
      {/* <img src="/assets/img/donateBox.jpg" alt="donate box" />  */}

    
      {/* <!-- Carousel End --> */}



      {/* <!-- About Start --> */}
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-parallax="scroll"
                data-image-src="/assets/img/donate.jpg"
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
            <h2>Increase donations for the causes we care about</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-education"></i>
                </div>
                <div className="service-text">
                  <h3>DEMOCRACY NOW!</h3>
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
                  <h3>COMIC RELIEF</h3>
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
                  <h3>SAFE PASSSSGE</h3>
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
                  <h2>Let's donate to create a better world</h2>
                </div>
                <div className="donate-text">
                  <p>
                    Mission:Possible focuses on causes that fight poverty, promote democracy, and advocate for children refugess.
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

    {/* <!-- Team Start --> */}
  <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <span></span>
            <h2>The founders of Mission:Possible</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-1.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Donald John</h2>
                  <p>Founder & CEO</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-2.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>Chef Executive</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-3.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Thomas Olsen</h2>
                  <p>Chef Advisor</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-4.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/arslan_razi.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/team-4.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>James Alien</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="github">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      

      

     
      <Footer />
    </>
  );
}

export default Home;
