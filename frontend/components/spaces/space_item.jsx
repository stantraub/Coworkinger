import React from 'react';
import './space_item.css'
class SpaceItem extends React.Component {
    render() {
        return (
            <div className="space-item-wrapper">
                {this.props.name}
                <div>
                    ${this.props.cost} / month
                </div>
            </div>
        )
    }
}

export default SpaceItem