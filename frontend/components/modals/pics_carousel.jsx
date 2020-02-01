import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PicsCarousel extends Component {
    constructor(props) {
        super(props)
        this.state ={
            currentIdx: 0
        }
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
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
        const { space = {}} = this.props
        const { currentIdx } = this.state
        if (space.space_pics) {
            return (
                <div className="carousel-background">
                    <div className="carousel-child">
                        <div className="carousel-main-pic-wrapper">
                            <img onClick={() => this.changePic(space.space_pics.length, -1)} className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png"></img>
                            <img className="carousel-main-pic" src={space.space_pics[currentIdx]}></img>
                            <img onClick={() => this.changePic(space.space_pics.length, 1)} className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png"></img>

                        </div>
                        <div className="carousel-sidebar">
                            <div>
                                <Link to={`/spaces/${space.id}`} className="carousel-x-button">
                                    <img className="carousel-x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
                                </Link>
                            </div>
                            <div className="carousel-pic-count">
                                {currentIdx + 1} / {space.space_pics.length}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
       
    }
}

