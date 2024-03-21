const Footer = () => {
  return (
    <footer>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-10 col-xl-9">
          <div className="row">
            <div className="col-12 mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span className="pointer">
                      Audio and Subtitles
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Media Center
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Privacy
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Contact us
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span className="pointer">
                      Audio Description
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Investor Relations
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Legal Notices
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span className="pointer">
                      Help Center
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Jobs
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Cookie Preferences
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span className="pointer">
                      Gift Cards
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Terms of Use
                    </span>
                  </p>
                  <p>
                    <span className="pointer">
                      Corporate Information
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-{new Date().getFullYear()} Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
