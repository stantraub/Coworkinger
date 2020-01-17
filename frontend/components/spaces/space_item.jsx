import React from 'react';

class SpaceItem extends React.Component {
    render() {
        return (
          <div className="space-item-wrapper">
            {this.props.name}
            <div>${this.props.cost} / month</div>
            <div>{this.props.city}, {this.props.state}</div>
          </div>
        );
    }
}

export default SpaceItem