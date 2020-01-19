import React from 'react';

class SpaceShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchSpace(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
}

export default SpaceShow