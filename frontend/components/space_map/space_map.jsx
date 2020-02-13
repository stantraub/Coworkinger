import React, { Component } from 'react'

export default class SpaceMap extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)
        
    }

    render() {
        return (
            <div className='map-container' ref={ map => this.mapNode = map}>
                Map
            </div>
        )
    }
}
