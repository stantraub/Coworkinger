import React from 'react';

class Amenities extends React.Component {
    constructor(props) {
        super(props)
    }

    amenitiesList(amenities) {
        if (amenities) {
            <div></div>
        }
    }

   

    render() {
        const {amenities = {}} = this.props
        
        return(
            <div className="amenities-modal-wrapper">
                <div className="amenities-content">
                    <h1>Amenities</h1>
                    <div>{this.amenitiesList(amenities)}</div>
                </div>
                
            </div>
        )
    }
}

export default Amenities