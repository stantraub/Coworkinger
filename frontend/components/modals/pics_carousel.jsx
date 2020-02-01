import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PicsCarousel extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
    }

    currentPic(spacePics, idx) {
        return spacePics[idx]
    }

    render() {
        const { space = {}} = this.props
        if (space.space_pics) {
            return (
                <div className="carousel-background">
                    <div className="carousel-child">
                        <div className="carousel-main-pic-wrapper">
                            <img className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png"></img>
                            <img className="carousel-main-pic" src={this.currentPic(space.space_pics, 0)}></img>
                            <img className="carousel-arrows" src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png"></img>

                        </div>
                        <div className="carousel-sidebar">
                            <Link to={`/spaces/${space.id}`} className="carousel-x-button">
                                <img className="carousel-x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
                            </Link>
                            <div></div>
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

