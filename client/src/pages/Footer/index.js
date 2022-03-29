function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Our Head Office</h2>
                <p>
                  <i className="fa fa-map-marker-alt"></i>1345 New Street, Toronto,
                  Canada
                </p>
                <p>
                  <i className="fa fa-phone-alt"></i>+1 416 855 5555
                </p>
                <p>
                  <i className="fa fa-envelope"></i>missionpossible@gmail.com
                </p>

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Popular Links</h2>
                <a href="about">About Us</a>
                <a href="contact">Contact Us</a>
                <a href="cause">Popular Causes</a>
              </div>
            </div>
           
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form>
                  <input
                    className="form-control"
                    placeholder="Email goes here"
                  />
                  <button className="btn btn-custom">Submit</button>
                  <label>Don't worry, we don't spam!</label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; <a href="#">Mission Possible</a>, All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Back to top button --> */}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>

      {/* <!-- Pre Loader --> */}
      {/* <div id="loader" className="show">
        <div className="loader"></div>
      </div> */}
    </>
  );
}

export default Footer;
