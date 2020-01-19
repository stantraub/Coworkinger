import { connect } from 'react-redux';
import SpaceShow from './space_show';
import { fetchSpace } from '../../actions/space_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    space: state.entities.spaces[ownProps.match.params.id]
})

const mdp = dispatch => ({
    fetchSpace: (id) => dispatch(fetchSpace(id))
})

export default withRouter(connect(msp, mdp)(SpaceShow))