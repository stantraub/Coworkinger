import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class SpaceItem extends React.Component {
    constructor(props) {
      super(props)
    }

    includedAmenities() {
      let included = ""

      if (this.props.availability) {
        included += "Space available · "
      }

      if (this.props.deskDay) {
        included += 'Day Passes Available · '
      }

      included += `${this.props.peopleCapacity} total capacity`

      if (this.props.officeCapacity > 0) {
        included += ` · ${this.props.officeCapacity} offices`
      }
      return included;
    }

    phone() {
      if (this.props.phone !== 'N/A') return this.props.phone
    }

    email() {
      if (this.props.email !== 'N/A') return this.props.email

    }
    render() {
      if (isBrowser) {
        return (
          <div className="space-item-wrapper">
            <Link to={`/spaces/${this.props.spaceId}`} className="space-link">
              <img className="main-pic" src={this.props.mainPic} />
            </Link>
            <Link to={`/spaces/${this.props.spaceId}`} className="space-link">
              <div className="space-item-info">
                <div className="space-item-name">{this.props.name}</div>
                <div className="space-item-amenities">
                  <div>
                    {this.props.city}, {this.props.state}
                  </div>
                  <span>{this.props.neighborhood}</span>
                  <div className="space-amenity-wrapper">
                    {this.includedAmenities()}
                  </div>
                  <div className="space-item-contact">
                    <div>{this.phone()}</div>
                    <div>{this.email()}</div>
                  </div>
                </div>
                <div className="space-item-cost">
                  <strong>${this.props.cost}</strong> per desk / month
                </div>
              </div>
            </Link>
          </div>
        );
      } else {
        return (
          <div className="space-item-wrapper">
            <Link to={`/spaces/${this.props.spaceId}`} className="space-link">
              <img className="main-pic-mobile" src={this.props.mainPic} />
            </Link>
            <Link to={`/spaces/${this.props.spaceId}`} className="space-link">
              <div>
                <div className="space-item-name-mobile">{this.props.name}</div>
                <div className="space-item-amenities-mobile">
                  <div>
                    {this.props.city}, {this.props.state}
                  </div>
                  <span>{this.props.neighborhood}</span>
                  <div className="space-amenity-wrapper">
                    {this.includedAmenities()}
                  </div>
                </div>
                <div className="space-item-cost-mobile">
                  <span>${this.props.cost} per desk / month</span>
                </div>
              </div>
            </Link>
          </div>
        );
      }

    }
}

export default SpaceItem