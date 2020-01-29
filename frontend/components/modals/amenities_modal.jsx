import React from 'react';

class Amenities extends React.Component {
    constructor(props) {
        super(props)
    }

    amenitiesList(categoryAmenities) {
        if (categoryAmenities) {
            let amenities = Object.entries(categoryAmenities)
            return amenities.map((amenity, i) => {
                if (amenity[0] === 'hours_24_access') {
                    return <div className="amenity-modal-item" key={i}>24/7 Access</div>
                } else if (amenity[0] === "phone_booths") {
                    return <div className="amenity-modal-item" key={i}>{amenity[1]} phone booths</div>
                } else if (amenity[0] === 'transit_station_miles') {
                    if (amenity[1] < 1) {
                        return <div className="amenity-modal-item" key={i}>&lt;1 mile to transit station </div>
                    } else {
                        return <div className="amenity-modal-item" key={i}>{amenity[1]} miles to nearest transit station </div>
                    }
                } else if (amenity[0] === 'meeting_rooms') {
                    return <div className="amenity-modal-item" key={i}>{amenity[1]} meeting rooms </div>
                } else if (amenity[0] === 'availability') {
                    return <div className="amenity-modal-item" key={i}>Space available</div>
                } else if (amenity[0] === 'office_capacity') {
                    return <div className="amenity-modal-item" key={i}> {amenity[1]} offices </div>
                } else if (amenity[0] === 'people_capacity') {
                    return <div className="amenity-modal-item" key={i}> {amenity[1]} total capacity </div>
                }
                
                else {
                    return <div className="amenity-modal-item" key={i}>{(amenity[0][0].toUpperCase() + amenity[0].slice(1)).split("_").join(" ")}</div>
                }

            })
        } 
    }
   

    render() {
        const { amenityCategories = {} } = this.props

        return(
            <div className="amenities-modal-wrapper">
                <div className="x-button" onClick={() => this.props.closeModal()}>
                    <img className="x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
                </div>
                <h1 className="amenities-modal-header">Amenities</h1>
                <div className="amenities-content">
                    {Object.keys(amenityCategories).map((category, i) => {
                        return (
                            <div className="amenity-category-wrapper" key={i}>
                                <h2 className="amenity-category-item">{category[0].toUpperCase() + category.slice(1).split("_").join(" ")}</h2>
                                <div>{this.amenitiesList(amenityCategories[category])}</div>
                            </div>
                            
                        )
                    })}


                </div>
                
            </div>
        )
    }
}

export default Amenities