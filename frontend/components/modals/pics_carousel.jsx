import React, { useState } from 'react'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const PicsCarousel = props =>{
    const [currentIdx, setCurrentIdx] = useState(0)

    function changePic(length, change) {
        if (currentIdx === 0 && change === -1) {
            setCurrentIdx(length -1)
        } else {
            setCurrentIdx((currentIdx + change) % length)
        }
    }
    const { spacePics } = props
    if (isBrowser) {
        return (
            <div className="carousel-child">
                <div className="carousel-main-pic-wrapper">
                    <div className="arrow-column-left">
                        <img onClick={() => changePic(spacePics.length, -1)} className="carousel-arrows" src="https://coworking-dev.s3-us-west-1.amazonaws.com/24095038_white-arrow-transparent-png-1.png"></img>
                    </div>
                    <div className="carousel-pic-div">
                        <img className="carousel-main-pic" src={spacePics[currentIdx]}></img>
                    </div>
                    <div className="arrow-column-right">
                        <img onClick={() => changePic(spacePics.length, 1)} className="carousel-arrows" src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"></img>
                    </div>
                </div>
                <div className="carousel-sidebar">
                    <div onClick={() => props.togglePicsCarousel()} className="carousel-x-button">
                        <img className="carousel-x-img" src="https://narrative.so/static/close-icon-white-4db08d3b63ac402ff1818b58026fd284.png"></img>
                    </div>
                    <div className="carousel-pic-count">
                        {currentIdx + 1} / {spacePics.length}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="carousel-child-mobile">
                <div className="carousel-x-mobile">
                    <div onClick={() => props.togglePicsCarousel()} className="carousel-x-button-mobile">
                        <img className="carousel-x-img-mobile" src="https://narrative.so/static/close-icon-white-4db08d3b63ac402ff1818b58026fd284.png"></img>
                    </div>
                </div>
                <div className="carousel-main-pic-wrapper-mobile">
                    <div className="arrow-column-left-mobile">
                        <img onClick={() => changePic(spacePics.length, -1)} className="carousel-arrows-mobile" src="https://coworking-dev.s3-us-west-1.amazonaws.com/24095038_white-arrow-transparent-png-1.png"></img>
                    </div>
                    <img className="carousel-main-pic-mobile" src={spacePics[currentIdx]}></img>
                    <div className="arrow-column-right-mobile">
                        <img onClick={() => changePic(spacePics.length, 1)} className="carousel-arrows-mobile" src="https://i.ya-webdesign.com/images/white-arrow-transparent-png-1.png"></img>
                    </div>
                </div>
                <div className="carousel-pic-count-mobile">
                    {currentIdx + 1} / {spacePics.length}
                </div>
            </div>
        )
    }

}

export default PicsCarousel