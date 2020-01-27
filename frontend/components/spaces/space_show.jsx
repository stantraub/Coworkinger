import React from 'react';

class SpaceShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
    }

    includedAmenities() {
      if (this.props.space.amenities) {

        let amenities = Object.keys(this.props.space.amenities).slice(0, 6)
        
        return amenities.map((amenity, i) => {
          return <div className="amenities-item" key={i}>{(amenity[0].toUpperCase() + amenity.slice(1)).split("_").join(" ")}</div>
        })

      } else {
        return <div></div>
      }
      
    } 

    otherAmenities() {
      let numAmenities = Object.keys(this.props.space.amenities).length
      if (numAmenities > 6) {
        return <div className="num-amenities-wrapper">
                  <div className="num-amenities-text">Show all {numAmenities} amenities</div>
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
                        {this.includedAmenities()}
                      </div>  
                      {this.otherAmenities()}
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