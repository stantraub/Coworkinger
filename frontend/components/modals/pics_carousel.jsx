import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PicsCarousel extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
    }

    render() {
        const { space = {}} = this.props
        if (space.space_pics) {
            return (
                <div className="carousel-background">
                    <div className="carousel-child">
                        <img className="carousel-main-pic" src={space.space_pics[0]}></img>
                        <div className="carousel-sidebar">
                            <Link to={`/spaces/${space.id}`} className="carousel-x-button">
                                <img className="carousel-x-img" src="http://cdn.onlinewebfonts.com/svg/img_170267.png"></img>
                            </Link>
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

