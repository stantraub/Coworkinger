import { connect } from 'react-redux';
import Amenities from './amenities_modal';
import { closeModal } from '../../actions/modal_actions';

import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    amenities: Object.values(state.entities.spaces)[0].amenities
})

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(msp, mdp)(Amenities));