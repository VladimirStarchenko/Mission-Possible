import Footer from "../Footer";

function About() {
  return (
    <>
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
                <h2>Canadian non-profit charity organization</h2>
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

      {/* <!-- Team Start --> */}
  {/* <!-- Team Start --> */}
  <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Meet Our Team</p>
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
                  <img src="/assets/img/team-3.jpg" alt="Team Image" />
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

export default About;
