import React from 'react'
import SpaceItem from './space_item';


// const Spaces = () => {
//     const [spaces, setSpaces] = useState([])
// }

class Spaces extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spaces: []
        }
    }

    componentDidMount() {
        this.props.fetchSpaces();
    }   

    componentWillReceiveProps(newState) {
        this.setState({ spaces: newState.spaces})
    }

    render() {
        if (this.state.spaces.length === 0) {
            return (
                <div>
                    There are no spaces in this location
                </div>
            )
        }
        return (
            <div className="space-index-main">
                <h1>All Coworking Spaces in San Francisco</h1>
                <div className="spaces-index-wrapper">
                    {this.state.spaces.map(space => (
                        <SpaceItem 
                            key={space._id}
                            name={space.name}
                            address={space.address}
                            city={space.city}
                            state={space.state}
                            cost={space.cost}
                            mainPic={space.main_pic}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Spaces
