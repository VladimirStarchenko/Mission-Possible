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
                data-image-src="/assets/img/facts.jpg"
              ></div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <p>Learn About Us</p>
                <h2>A non-profit charity organization working to solve the issues we care about through donations</h2>
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
                  We are a non profit organization working to raise money for various causes throughtout Canada. Benefactors can donate to the charity of their choice. 
                  </div>
                  <div id="tab-content-2" className="container tab-pane fade">
                  Our mission to take make things possible through donations. 

                  </div>
                  <div id="tab-content-3" className="container tab-pane fade">
                  Create change through donations! 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <span></span>
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
                    An American TV, radio and internet news programs that combines news reporting, interviews, investigative journalism and political commentary, with a focus on peace activistism linked to environmental justice and social justice, guided by the ethics of ecofeminism as a philosophy. Democracy Now! gives activists and citizens a platform to debate "The Establishment". 
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
                  Comic Relief invests in nonprofit and community-led organizations with programs focused on tackling the root causes and consequences of poverty and social injustice. We support initiatives and policies that advance economic opportunity and leadership development in communities directly impacted by intergenerational poverty.
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
                  Every year thousands of child refugees arrive in Europe, almost half of them are unaccompanied and as a result are at risk of being abused and trafficked. Yet many of these children have a legal right to travel safely to a place of sanctuary. With our support they can access their rights. 
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
        // data-image-src="/assets/img/donate.jpg"
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
                  <h2>Arslan Razi</h2>
                  <p>Founder & CEO</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/arslanrazi/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/arslan-razi">
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
                  <h2>Bianca Chami</h2>
                  <p>Chef Executive</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/bianca-chami-3ba87a178/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/chamibia">
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
                  <h2>Daniel Arzanipour</h2>
                  <p>Chef Advisor</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/daniel-arzanipour/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/DanielArzani">
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
                  <h2>Fabiola Castaneda G.</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/fabicastaneda/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Fabscg">
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
                  <h2>Joona Lusa</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/joona-lusa-b5436b211/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/jlusa101">
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
                  <h2>Vladimir Starchenko</h2>
                  <p>Advisor</p>
                  <div className="team-social">
                    <a href="https://www.linkedin.com/in/vladimir-starchenko-636016205/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/VladimirStarchenko">
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
      
      {/* <!-- Contact Start --> */}
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>Contact Us!</h2>
          </div>
          <div className="contact-img">
            <img src="/assets/img/contact.jpg" alt="contact" />
          </div>
          <div className="contact-form">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" noValidate="noValidate">
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
