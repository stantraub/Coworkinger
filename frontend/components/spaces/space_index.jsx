import React from 'react'
import SpaceItem from './space_item';

class Spaces extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchSpaces();
    }   

    render() {
        if (this.props.spaces.length === 0) {
            return (
                <div>
                    There are no spaces in this location
                </div>
            )
        } else {
            return (
                <div className="space-index-main">
                    <h1 className="space-index-header">All Coworking Spaces in San Francisco</h1>
                    <div className="spaces-index-wrapper">
                        {this.props.spaces.map(space => (
                            <SpaceItem 
                                key={space.id}
                                spaceId={space.id}
                                name={space.name}
                                address={space.address}
                                city={space.city}
                                state={space.state}
                                cost={space.cost}
                                mainPic={space.main_pic}
                                parking={space.parking}
                                wifi={space.wifi_included}
                                openHour={space.open_hour}
                                closingHour={space.closing_hour}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Spaces
