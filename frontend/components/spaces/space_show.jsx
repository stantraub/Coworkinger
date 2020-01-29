import React from 'react';

class SpaceShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
    }

    includedAmenities(spaceAmenities) {
      if (spaceAmenities) {

        let amenities = Object.entries(spaceAmenities).slice(0, 6)
        
        return amenities.map((amenity, i) => {
          if (amenity[0] === 'hours_24_access') {
            return <div className="amenities-item" key={i}>24/7 Access</div>
          } else if (amenity[0] === "phone_booths") {
            return <div className="amenities-item" key={i}>{amenity[1]} phone booths</div>
          } else if (amenity[0] === 'transit_station_miles') {
              if (amenity[1] < 1) { 
                return <div className="amenities-item" key={i}> &lt;1 mile to nearest transit station </div>
              } else {
                return <div className="amenities-item" key={i}> {amenity[1]} miles to nearest transit station </div>
              }
          } else if (amenity[0] === 'nearest_parking') {
              if (amenity[1] < 1) {
                return <div className="amenities-item" key={i}>&lt;1 mile to nearest parking lot</div>
              } else {
                return <div className="amenities-item" key={i}>{amenity[1]} miles to nearest parking lot </div>
              }
          } else if (amenity[0] === 'meeting_rooms') {
            return <div className="amenities-item" key={i}> {amenity[1]} meeting rooms </div>
          } else if (amenity[0] === 'people_capacity') {
            return <div className="amenities-item" key={i}> {amenity[1]} total capacity </div>
          } else {
            return <div className="amenities-item" key={i}>{(amenity[0][0].toUpperCase() + amenity[0].slice(1)).split("_").join(" ")}</div>
          }
        })

      } else {
        return <div></div>
      }
      
    } 

    otherAmenities(spaceAmenities) {
      let numAmenities = Object.keys(spaceAmenities).length
      if (numAmenities > 6) {
        return <div className="num-amenities-wrapper">
                  <div className="num-amenities-text" onClick={() => this.props.openModal('amenities')}>Show all {numAmenities} amenities</div>
               </div>
      }
    }
    
    render() {
        // if space is undefined, set space equal to an empty object
        const {space = {}} = this.props
        if (space.space_pics) {
            return (
              <div className="space-show-main-div">
                <div className="space-pics">
                  <img
                    className="space-show-main-pic"
                    src={space.main_pic}
                  ></img>
                  <div className="space-show-space-pics">
                    <div className="space-show-pic-column">
                      <img
                        className="space-show-pic-image"
                        src={space.space_pics[0]}
                      ></img>
                      <img
                        className="space-show-pic-image"
                        src={space.space_pics[1]}
                      ></img>
                    </div>
                    <div className="space-show-pic-column">
                      <img
                        className="space-show-pic-image"
                        src={space.space_pics[2]}
                      ></img>
                      <img
                        className="space-show-pic-image"
                        src={space.space_pics[3]}
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="space-info-wrapper">
                  <div className="space-show-info">
                    <div className="space-summary">
                      <span className="space-show-name">{space.name}</span>
                      <div className="space-show-city">{space.city}</div>
                    </div>
                    <div className="description-wrapper">
                      <p className="space-show-description">
                        {space.description}
                      </p>
                    </div>
                    <div className="amenities-wrapper">
                      <h2>Amenities</h2>
                      <div className="amenities-div">
                        {this.includedAmenities(space.amenities)}
                      </div>  
                      {this.otherAmenities(space.amenities)}
                    </div>
                  </div>
                  <div className="reserve-widget-wrapper">
                    <div className="reserve-widget">
                      <span className="reserve-cost">${space.cost} </span>
                      <span className="reserve-per-month">per desk / month</span>
                    </div>
                    <div className="contact-info-wrapper">
                      <div className="contact-item-top"><a href={space.website}>{space.website}</a></div>
                      <div className="contact-item">{space.email}</div>
                      <div className="contact-item">{space.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default SpaceShow