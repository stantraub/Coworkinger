import React from 'react'
import SpaceItem from './space_item';
import SpaceMap from '../space_map/space_map';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Spaces extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchSpaces();
    }   

    render() {
        if (isBrowser) {
            if (this.props.spaces.length === 0) {
            return <div>There are no spaces in this location</div>;
            } else {
            return (
              <div className="space-index-main">
                <div className="spaces-index-spaces-wrapper">
                  <div className="space-index-header">
                    All spaces in San Francisco
                  </div>
                  {this.props.spaces.map(space => (
                    <SpaceItem
                      key={space.id}
                      spaceId={space.id}
                      neighborhood={space.neighborhood}
                      peopleCapacity={space.people_capacity}
                      officeCapacity={space.office_capacity}
                      availability={space.availability}
                      deskDay={space.desk_day}
                      name={space.name}
                      address={space.address}
                      city={space.city}
                      state={space.state}
                      cost={space.cost}
                      mainPic={space.main_pic}
                      openHour={space.open_hour}
                      closingHour={space.closing_hour}
                      email={space.email}
                      phone={space.phone}
                    />
                  ))}
                </div>
                <div className="space-index-map">
                  <SpaceMap />
                </div>
              </div>
            );
            }
        } else {
              if (this.props.spaces.length === 0) {
                return <div>There are no spaces in this location</div>;
              } else {
                return (
                  <div className="space-index-main-mobile">
                    <h1 className="space-index-header-mobile">
                      All San Francisco workspaces
                    </h1>
                    <div className="spaces-index-wrapper">
                      {this.props.spaces.map(space => (
                        <SpaceItem
                          key={space.id}
                          spaceId={space.id}
                          neighborhood={space.neighborhood}
                          peopleCapacity={space.people_capacity}
                          officeCapacity={space.office_capacity}
                          availability={space.availability}
                          deskDay={space.desk_day}
                          name={space.name}
                          address={space.address}
                          city={space.city}
                          state={space.state}
                          cost={space.cost}
                          mainPic={space.main_pic}
                          openHour={space.open_hour}
                          closingHour={space.closing_hour}
                          email={space.email}
                          phone={space.phone}
                        />
                      ))}
                    </div>
                  </div>
                );
            }
        }
    }
}

export default Spaces
