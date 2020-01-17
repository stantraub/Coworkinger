import React from 'react';

class SpaceItem extends React.Component {
    constructor(props) {
      super(props)
    }

    includedAmenities() {
      let included = ""

      if (this.props.parking === 'Yes') {
        included += 'Nearby Parking · '
      }

      if (this.props.wifi === true) {
        included += 'Wifi'
      }
      
      return included;
    }
    render() {
        return (
          <div className="space-item-wrapper">
            <img className="main-pic" src={this.props.mainPic} />
            <div className="space-item-info">
              <div className="space-item-name">{this.props.name}</div>
              <div className="space-item-amenities">
                <div>{this.props.city}, {this.props.state}</div>
                <div>{this.includedAmenities()}</div>
                <div>Hours: {this.props.openHour} - {this.props.closingHour}</div>
              </div>
              <div className="space-item-cost"><strong>${this.props.cost}</strong> / month</div>
            </div>
          </div>
        );
    }
}

export default SpaceItem