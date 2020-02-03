import React, { Component } from 'react'

export default class PicsCarousel extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentIdx: 0
        }
    }

    changePic(length, change) {
        if (this.state.currentIdx === 0 && change === -1) {
                this.setState({currentIdx: length -1})
        } else {
            this.setState({currentIdx: (this.state.currentIdx + change) % length})
        }
    }

    render() {
        const { currentIdx } = this.state
        const { spacePics } = this.props
        return (
            <div className="carousel-child">
                <div className="carousel-main-pic-wrapper">
                    <img onClick={() => this.changePic(spacePics.length, -1)} className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png"></img>
                    <img className="carousel-main-pic" src={spacePics[currentIdx]}></img>
                    <img onClick={() => this.changePic(spacePics.length, 1)} className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png"></img>
                </div>
                <div className="carousel-sidebar">
                    <div onClick={() => this.props.togglePicsCarousel()} className="carousel-x-button">
                        <img className="carousel-x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
                    </div>
                    <div className="carousel-pic-count">
                        {currentIdx + 1} / {spacePics.length}
                    </div>
                </div>
            </div>
        )
    }
}

