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
        Object.entries(this.props.space.amenties).map(amenity => {
          if (amenity[1] === true || amenity[1] === 'Yes') {
            return <span>{amenity[0]}</span>
          }
        })
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
                    <div className="amenties-wrapper">
                      
                    </div>
                  </div>
                  <div className="reserve-widget-wrapper">
                    <div className="reserve-widget">
                      <div className="reserve-cost-wrapper">
                        <span className="reserve-cost">${space.cost} </span>
                        <span className="reserve-per-month">per month</span>
                      </div>
                      <button className="reserve-tour-btn">Book a tour</button>
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