import React, { useState, useEffect } from 'react';
import PicsCarousel from '../modals/pics_carousel';
import AmenitiesModal from '../modals/amenities_modal';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const SpaceShow = props =>  {

  const [picsCarousel, setPicsCarousel] = useState(false)
  const [amenitiesModal, setAmenitiesModal] = useState(false)

    function togglePicsCarousel() {
      setPicsCarousel(!picsCarousel)
    }

    function toggleAmenitiesModal() {
      setAmenitiesModal(!amenitiesModal)
    }

   function showPicsCarousel(space) {
      return (
        picsCarousel ? 
          <div className="carousel-background">
            <PicsCarousel spacePics={space.space_pics} togglePicsCarousel={togglePicsCarousel} />
          </div> 
          : 
          null
      )
    }

   function showAmenitiesModal(space) {
      if (isMobile) {
        return (
          amenitiesModal ?
          <div className="amenities-background-mobile">
            <div className="amenities-modal-child-mobile">
              <AmenitiesModal amenityCategories={space.amenityCategories} toggleAmenitiesModal={toggleAmenitiesModal} />
            </div> 
          </div>
          : null
        )
      } else {
        return (
          amenitiesModal ?
            <div className="amenities-background">
              <div className="amenities-modal-child">
                <AmenitiesModal amenityCategories={space.amenityCategories} toggleAmenitiesModal={toggleAmenitiesModal} />
              </div>
            </div> : null
        )
      }
  
    }
    useEffect(() => {
      props.fetchSpace(props.match.params.id)
    }, [])
  
    function includedAmenities(spaceAmenities) {
      if (isBrowser) {
        let amenities = Object.entries(spaceAmenities).slice(0, 6)
        return amenities.map((amenity, i) => {
          if (amenity[0] === 'hours_24_access') {
            return <div className="amenities-item" key={i}>24/7 Access</div>
          } else if (amenity[0] === "phone_booths") {
            return <div className="amenities-item" key={i}>{amenity[1]} phone booths</div>
          } else if (amenity[0] === 'transit_station_miles') {
              if (amenity[1] < 1) { 
                return <div className="amenities-item" key={i}> &lt;1 mile to nearest transit station </div>
              } else {
                return <div className="amenities-item" key={i}> {amenity[1]} miles to nearest transit station </div>
              }
          } else if (amenity[0] === 'nearest_parking') {
              if (amenity[1] < 1) {
                return <div className="amenities-item" key={i}>&lt;1 mile to nearest parking lot</div>
              } else {
                return <div className="amenities-item" key={i}>{amenity[1]} miles to nearest parking lot </div>
              }
          } else if (amenity[0] === 'meeting_rooms') {
            return <div className="amenities-item" key={i}> {amenity[1]} meeting rooms </div>
          } else if (amenity[0] === 'people_capacity') {
            return <div className="amenities-item" key={i}> {amenity[1]} total capacity </div>
          } else {
            return <div className="amenities-item" key={i}>{(amenity[0][0].toUpperCase() + amenity[0].slice(1)).split("_").join(" ")}</div>
          }
        })
      } else {
          let amenities = Object.entries(spaceAmenities).slice(0, 6);
          return amenities.map((amenity, i) => {
            if (amenity[0] === "hours_24_access") {
              return (
                <div className="amenities-item-mobile" key={i}>
                  24/7 Access
                </div>
              );
            } else if (amenity[0] === "phone_booths") {
              return (
                <div className="amenities-item-mobile" key={i}>
                  {amenity[1]} phone booths
                </div>
              );
            } else if (amenity[0] === "transit_station_miles") {
              if (amenity[1] < 1) {
                return (
                  <div className="amenities-item-mobile" key={i}>
                    {" "}
                    &lt;1 mile to nearest transit station{" "}
                  </div>
                );
              } else {
                return (
                  <div className="amenities-item-mobile" key={i}>
                    {" "}
                    {amenity[1]} miles to nearest transit station{" "}
                  </div>
                );
              }
            } else if (amenity[0] === "nearest_parking") {
              if (amenity[1] < 1) {
                return (
                  <div className="amenities-item-mobile" key={i}>
                    &lt;1 mile to nearest parking lot
                  </div>
                );
              } else {
                return (
                  <div className="amenities-item-mobile" key={i}>
                    {amenity[1]} miles to nearest parking lot{" "}
                  </div>
                );
              }
            } else if (amenity[0] === "meeting_rooms") {
              return (
                <div className="amenities-item-mobile" key={i}>
                  {" "}
                  {amenity[1]} meeting rooms{" "}
                </div>
              );
            } else if (amenity[0] === "people_capacity") {
              return (
                <div className="amenities-item-mobile" key={i}>
                  {" "}
                  {amenity[1]} total capacity{" "}
                </div>
              );
            } else {
              return (
                <div className="amenities-item-mobile" key={i}>
                  {(amenity[0][0].toUpperCase() + amenity[0].slice(1))
                    .split("_")
                    .join(" ")}
                </div>
              );
            }
          });
      }
      
    } 

    function otherAmenities(spaceAmenities) {
      let numAmenities = Object.keys(spaceAmenities).length
      if (numAmenities > 6) {
        if (isBrowser) {
          return (
            <div className="num-amenities-wrapper">
              <div
                className="num-amenities-text"
                onClick={() => toggleAmenitiesModal()}
              >
                Show all {numAmenities} amenities
              </div>
            </div>
          );
        } else {
           return (
             <div className="num-amenities-wrapper-mobile">
               <div
                 className="num-amenities-text-mobile"
                  onClick={() => toggleAmenitiesModal()}
               >
                 Show all {numAmenities} amenities
               </div>
             </div>
           );
        }
      }
    }
        // if space is undefined, set space equal to an empty object
      const {space = {}} = props

      if (space.space_pics) {
        if (isBrowser) {
          return (
            <div className="space-show-main-div">
              {showPicsCarousel(space)}
              {showAmenitiesModal(space)}
              <div className="space-pics">
                <img className="space-show-main-pic" src={space.main_pic}></img>
                <div className="space-show-space-pics">
                  <div className="space-show-pic-column">
                    <img
                      className="space-show-pic-image"
                      src={space.space_pics[0]}
                    ></img>
                    <img
                      className="space-show-pic-image"
                      src={space.space_pics[1]}
                    ></img>
                  </div>
                  <div className="space-show-pic-column">
                    <img
                      className="space-show-pic-image"
                      src={space.space_pics[2]}
                    ></img>
                    <img
                      className="space-show-pic-image"
                      src={space.space_pics[3]}
                    ></img>
                    <button
                      onClick={() => togglePicsCarousel()}
                      className="photos-btn"
                    >
                      View Photos
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-info-wrapper">
                <div className="space-show-info">
                  <div className="space-summary">
                    <span className="space-show-name">{space.name}</span>
                    <div className="space-show-city">{space.city}</div>
                  </div>
                  <div className="description-wrapper">
                    <p className="space-show-description">
                      {space.description}
                    </p>
                  </div>
                  <div className="amenities-wrapper">
                    <div className="amenities-header">Amenities</div>
                    <div className="amenities-div">
                      {includedAmenities(space.amenities)}
                    </div>
                    {otherAmenities(space.amenities)}
                  </div>
                </div>
                <div className="reserve-widget-wrapper">
                  <div className="reserve-widget">
                    <span className="reserve-cost">${space.cost} </span>
                    <span className="reserve-per-month">per desk / month</span>
                  </div>
                  <div className="contact-info-wrapper">
                    <div className="contact-item-top">
                      <a href={space.website}>{space.website}</a>
                    </div>
                    <div className="contact-item">{space.email}</div>
                    <div className="contact-item">{space.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="space-show-main-div-mobile">
              {showPicsCarousel(space)}
              {showAmenitiesModal(space)}
              <div className="space-pics-mobile">
                <img
                  className="space-show-main-pic-mobile"
                  src={space.main_pic}
                ></img>
                <button
                  onClick={() => togglePicsCarousel()}
                  className="photos-btn-mobile"
                >
                  View Photos
                    </button>
              </div>
              <div className="space-info-wrapper-mobile">
                <div className="space-show-info-mobile">
                  <div>
                    <div className="space-show-name-mobile">{space.name}</div>
                    <div className="space-show-city-mobile">{space.city}</div>
                  </div>
                  <div className="description-wrapper">
                    <p className="space-show-description-mobile">
                      {space.description}
                    </p>
                  </div>
                  <div className="amenities-wrapper-mobile">
                    <div className="amenities-header-mobile">Amenities</div>
                    <div className="amenities-div-mobile">
                      {includedAmenities(space.amenities)}
                    </div>
                    {otherAmenities(space.amenities)}
                  </div>
                  <div className="contact-info-wrapper-mobile">
                    <div className="contact-header-mobile">Contact Information</div>
                    <div className="contact-item-mobile">
                      <a href={space.website}>{space.website}</a>
                    </div>
                    <div className="contact-item-mobile">{space.email}</div>
                    <div className="contact-item-mobile">{space.phone}</div>
                  </div>
                </div>
              </div>
              <div className="reserve-widget-mobile">
                <span className="reserve-cost-mobile">${space.cost} </span>
                <span className="reserve-per-month-mobile">per desk / month</span>
              </div>
            </div>
          );
        }
      } else {
          return (
              <div>
              </div>
          )
      }
}

export default SpaceShow