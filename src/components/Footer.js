import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Featured Service</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <Link to="/service/website-design-and-development">
                      Website Design and Development Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/search-engine-optimization">
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/digital-marketing">
                      Digital Marketing Service
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Column 3</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <Link to="/page1">Page 1</Link>
                  </li>
                  <li>
                    <Link to="/page2">Page 2</Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Column 4</h3>
                </div>
                <ul className="footer-quick-links">
                  <li>
                    <Link to="/page3">Page 3</Link>
                  </li>
                  <li>
                    <Link to="/page4">Page 4</Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            {/* Contact Info */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Contact Info</h3>
                </div>
                <ul className="footer-contact-info">
                  <li>
                    <span>
                      <i className="ri-map-pin-fill"></i> 25, Rohini, Delhi-110085, India
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-phone-fill"></i> +91 98765 43210
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-mail-line"></i> info@seostartup.co
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>Social Media</h3>
                </div>
                <ul className="footer-social-media">
                  <li>
                    <a href="https://www.facebook.com/digitant/" target="_blank" rel="noreferrer">
                      <i className="ri-facebook-fill"></i> <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/digitant/" target="_blank" rel="noreferrer">
                      <i className="ri-linkedin-fill"></i> <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/digitant" target="_blank" rel="noreferrer">
                      <i className="ri-twitter-fill"></i> <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/digitant/" target="_blank" rel="noreferrer">
                      <i className="ri-instagram-fill"></i> <FaInstagramSquare />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>&copy; {new Date().getFullYear()} SeoStartup. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <ul className="footer-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
