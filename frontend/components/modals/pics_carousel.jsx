import React, { Component } from 'react'

export default class PicsCarousel extends Component {
    constructor(props) {
        super(props)
        this.state ={
            currentIdx: 0
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    changePic(length, change) {
        if (change === -1) {
            if (this.state.currentIdx === 0) {
                this.setState({currentIdx: length -1})
            } else {
                this.setState({currentIdx: this.state.currentIdx - 1})
            }
        } else {
            if (this.state.currentIdx === length - 1) {
                this.setState({currentIdx: 0})
            } else {
                this.setState({currentIdx: this.state.currentIdx + 1})
            }
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
                        <div onClick={() => this.props.handleClick()} className="carousel-x-button">
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

