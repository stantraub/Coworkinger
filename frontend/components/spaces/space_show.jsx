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

    // componentWillReceiveProps(newState) {
    //     this.setState({ space: newState.space})
    // }

    render() {
        const {space = {}} = this.props
        return (
            <div className="space-show-main-div">
                <div className="space-pics">
                    <img className="space-show-main-pic" src={space.main_pic}></img>
                </div>
                <div className="space-show-info">
                    <div className='space-summary'>
                        <span className="space-show-name">{space.name}</span>
                        <div>{space.city}</div>
                    </div>
                    <div>
                        <p>{space.description}</p>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default SpaceShow