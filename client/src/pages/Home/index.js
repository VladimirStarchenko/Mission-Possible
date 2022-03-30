import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_CHARITIES } from "../utils/queries.js";
import Footer from "../Footer";
import "./home-index.css";

function Home() {
  return (
    <>
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
                // data-image-src="/assets/img/facts.jpg"
                data-image-src="/assets/img/happy-kids.jpg"
              ></div>
            </div>
            <div className="col-lg-6">
              <div className="section-header">
                <p id="learn-subtext">Learn About Us</p>
                <h2>
                  A non-profit charity organization working to improve the
                  causes we care about through donations
                </h2>
              </div>
              <div className="about-tab">
                <ul className="nav nav-pills nav-justified">
                  <li className="nav-item">
                    <a
                      id="vision-mission"
                      className="nav-link active"
                      data-toggle="pill"
                      href="#tab-content-1"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="about-mission"
                      className="nav-link"
                      data-toggle="pill"
                      href="#tab-content-2"
                    >
                      MISSION
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="vision-tab"
                      style={{ color: "inherit" }}
                      className="nav-link"
                      data-toggle="pill"
                      href="#tab-content-3"
                    >
                      VISION
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab-content-1" className="container tab-pane active">
                    We are a  group of web developers working to help charity organizations increase their donations to improve necessary causes. We work to make it easy for benefactors to visit our website and donate to a charity of their choice.
                    We believe that making a little donation, can make a great change in
                    the world.
                  </div>
                  <div id="tab-content-2" className="container tab-pane fade">
                    Our mission to take make things possible through
                    donations. Our organizations is currently focused on tackling three causes. We are working with Democracy Now! to increase their outreach over media outlets, working to debate and discuss world systems. We are supporting Comic Relief to deal with poverty in various communities and get to the root cause of this issue. With Safe Passage were working to give young refugees a safe home and accessing their legal rights through funding any of their legal fees. 
                  </div>
                  <div id="tab-content-3" className="container tab-pane fade">
                    Create change through donations! We envision a world with increased democratic rights, improved quality of life, and access to rights, education, and citizenship. 
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
            <p id="subheader-causes">What We Do?</p>
            <h2 id="causes-header">
              Increase donations for the causes we care about
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-education"></i>
                </div>
                <div className="service-text">
                  <h3 id="democracy-header">DEMOCRACY NOW!</h3>
                  <p>
                    A media outlet that combines news reporting, interviews,
                    investigative journalism and political commentary, with a
                    focus on peace activistism linked to environmental justice
                    and social justice, guided by the ethics of ecofeminism as a
                    philosophy. Democracy Now! gives activists and citizens a
                    platform to debate the system.
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
                  <h3 id="comic-header">COMIC RELIEF</h3>
                  <p>
                    Comic Relief invests in nonprofit and community-led
                    organizations with programs focused on tackling the root
                    causes and consequences of poverty and social injustice. We
                    support initiatives and policies that advance economic
                    opportunity and leadership development in communities
                    directly impacted by intergenerational poverty.
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
                  <h3 id="safe-header">SAFE PASSSSGE</h3>
                  <p>
                    Every year thousands of child refugees arrive in Europe,
                    almost half of them are unaccompanied and as a result are at
                    risk of being abused and trafficked. Yet many of these
                    children have a legal right to travel safely to a place of
                    sanctuary. With our support they can access their rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Causes Start --> */}
      <div className="causes">
        <div className="container">
          <div className="section-header text-center">
            <p id="popular-causes">Popular Causes</p>
            <h2>Let's know about charity causes around the world</h2>
          </div>
          <div className="owl-carousel causes-carousel">
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/democracyNow.jpg" alt="Image" />
              </div>

              <div className="causes-text">
                <h3>Democracy Now!</h3>
                <p>
                  Focuses on peace activism, environmental justice and social
                  justice to debate and improve the system.
                </p>
              </div>
              <div className="causes-btn">
                <a
                  className="btn btn-custom w-100"
                  href="https://www.democracynow.org/"
                  target="_blank"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/comic-relief.jpg" alt="Image" />
              </div>

              <div className="causes-text">
                <h3>Comic Relief</h3>
                <p>
                  Invests in nonprofit and community led organizations to fight
                  poverty and social injustice.
                </p>
              </div>
              <div className="causes-btn">
                <a
                  className="btn btn-custom w-100"
                  href="https://www.comicrelief.com/"
                  target="_blank"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="causes-item">
              <div className="causes-img">
                <img src="/assets/img/safePassage.jpg" alt="Image" />
              </div>

              <div className="causes-text">
                <h3>Safe Passage</h3>
                <p>
                  Advocates for abused and traficked child refugees
                  arriving in Europe. Giving them access to their legal rights
                  and safe shelter.
                </p>
              </div>
              <div className="causes-btn">
                <a
                  className="btn btn-custom w-100"
                  href="https://safe-passage.ca/"
                  target="_blank"
                >
                  Learn More
                </a>
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
        // data-image-src="/assets/img/donate.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="donate-content">
                <div className="section-header">
                  <p id="donate-subheader">Donate Now</p>
                  <h2 id="donate-header">
                    Let's give to a cause to create a better world
                  </h2>
                </div>
                <div className="donate-text">
                  <p id="mission-statement">
                    Mission Possible donates all their funds to charities work
                    to fight poverty, promote democracy, and advocate for
                    children refugess.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div id="donate-section" className="donate-form">
                <form action="./donate" method="POST">
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="donor"
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$ Amount"
                      name="amount"
                      required="required"
                    />
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
            <h2 id="founders-header">The founders of Mission Possible</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/arslan_razi.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Arslan Razi</h2>
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
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/about-me.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Bianca Chami</h2>
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
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/Daniel.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Daniel Arzanipour</h2>
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
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/my-avatar.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Fabiola Castaneda G.</h2>
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

            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/joona-lu.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Joona Lusa</h2>
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

            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/assets/img/vlad-avatar.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Vladimir Starchenko</h2>
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
      {/* Our sever is blocking requests, configure headers properly */}
      <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <p id="contact-header">Get In Touch</p>
            <h2 id="contact-subheader">Contact Us!</h2>
          </div>
          <div id="contact-header" className="contact-img">
            <img src="/assets/img/contact-image.jpg" alt="contact" />
          </div>
          <div className="contact-form">
            <div id="success"></div>
            <form
              action="https://formsubmit.co/daniel.arzanipour@gmail.com"
              method="POST"
              name="sentMessage"
              id="contactForm"
              noValidate="noValidate"
            >
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                  name="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button
                  className="btn btn-block"
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
