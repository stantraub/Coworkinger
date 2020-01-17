import React from 'react';

class SpaceItem extends React.Component {
    render() {
        return (
          <div className="space-item-wrapper">
            <img className="main-pic" src={this.props.mainPic} />
            {this.props.name}
            <div><strong>${this.props.cost}</strong> / month</div>
            <div>{this.props.city}, {this.props.state}</div>
          </div>
        );
    }
}

export default SpaceItem