import { connect } from 'react-redux';
import Spaces from './space_index';
import { fetchSpaces } from '../../actions/space_actions';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
    return {
        spaces: Object.values(state.entities.spaces)
    }
}
const mdp = dispatch => ({
    fetchSpaces: () => dispatch(fetchSpaces())
})

export default withRouter(connect(msp, mdp)(Spaces));