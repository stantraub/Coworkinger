import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSpace } from '../../actions/space_actions'
import PicsCarousel from './pics_carousel';

const msp = (state, ownProps) => {
    return {
        space: state.entities.spaces[ownProps.match.params.id]
    }
}

const mdp = dispatch => ({
    fetchSpace: (id) => dispatch(fetchSpace(id))
})

export default withRouter(connect(msp, mdp)(PicsCarousel));