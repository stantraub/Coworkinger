import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (isBrowser) {
            return (
            <div className="main-nav">
                <span>
                    <Link to="/" className="main-logo">
                    Coworking
                    </Link>
                </span>
                <div className="action-buttons-wrapper">
                    <div className="action-item">
                    <span>List a workspace</span>
                    </div>
                    <div className="action-item">
                    <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={"/spaces"}
                    >
                        <span>Find a workspace</span>
                    </Link>
                    </div>
                    <div className="action-item">
                    <span>Write a Review</span>
                    </div>
                </div>
            </div>
        
            );
        } else {
            return (
              <div className="main-nav-mobile">
                  <Link to="/" className="main-logo-mobile">
                    Coworking
                  </Link>
                <div className="action-buttons-wrapper-mobile">
                  <div className="action-item">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/spaces"}
                    >
                      <span>Find a workspace</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
        }
    }
}

export default Navbar;
