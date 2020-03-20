import React from 'react';
import { Link } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const SpaceItem = props => {

  function includedAmenities() {
    let included = ""

    if (props.availability) {
      included += "Space available · "
    }

    if (props.desk_day) {
      included += 'Day Passes Available · '
    }

    included += `${props.people_capacity} total capacity`

    if (props.officeCapacity > 0) {
      included += ` · ${props.office_capacity} offices`
    }
    return included;
  }

  function phone() {
    if (props.phone !== 'N/A') return props.phone
  }

  function email() {
    if (props.email !== 'N/A') return props.email

  }
  if (isBrowser) {
    return (
      <div className="space-item-wrapper">
        <Link to={`/spaces/${props.spaceId}`} className="space-link">
          <img className="main-pic" src={props.main_pic} />
        </Link>
        <Link to={`/spaces/${props.spaceId}`} className="space-link">
          <div className="space-item-info">
            <div className="space-item-name">{props.name}</div>
            <div className="space-item-amenities">
              <div>
                {props.city}, {props.state}
              </div>
              <span>{props.neighborhood}</span>
              <div className="space-amenity-wrapper">
                {includedAmenities()}
              </div>
              <div className="space-item-contact">
                <div>{phone()}</div>
                <div>{email()}</div>
              </div>
            </div>
            <div className="space-item-cost">
              <strong>${props.cost}</strong> per desk / month
            </div>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="space-item-wrapper">
        <Link to={`/spaces/${props.spaceId}`} className="space-link">
          <img className="main-pic-mobile" src={props.main_pic} />
        </Link>
        <Link to={`/spaces/${props.spaceId}`} className="space-link">
          <div>
            <div className="space-item-name-mobile">{props.name}</div>
            <div className="space-item-amenities-mobile">
              <div>
                {props.city}, {props.state}
              </div>
              <span>{props.neighborhood}</span>
              <div className="space-amenity-wrapper">
                {includedAmenities()}
              </div>
            </div>
            <div className="space-item-cost-mobile">
              <span>${props.cost} per desk / month</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}


export default SpaceItem