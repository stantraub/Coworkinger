import React from 'react';

class SpaceShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            space: []
        }
    }

    componentDidMount() {
        this.props.fetchSpace(this.props.match.params.id)
    }

    componentWillReceiveProps(newState) {
        this.setState({ space: newState.space})
    }

    render() {
        return (
            <div>
                <div className="space-pics">
                    <img className="space-show-main-pic" src={this.state.space.main_pic}></img>
                </div>
            </div>
        )
    }
}

export default SpaceShow