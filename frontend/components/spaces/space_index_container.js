import { connect } from 'react-redux';
import Spaces from './space_index';
import { fetchSpaces } from '../../actions/space_actions';

const msp = (state) => {
    return {
        spaces: Object.values(state.spaces.all)
    }
}
const mdp = dispatch => ({
    fetchSpaces: () => dispatch(fetchSpaces())
})

export default connect(msp, mdp)(Spaces);