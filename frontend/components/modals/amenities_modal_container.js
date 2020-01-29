import { connect } from 'react-redux';
import Amenities from './amenities_modal';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    
    return({
        amenityCategories: Object.values(state.entities.spaces)[0].amenityCategories
    })
}

const mdp = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())

    })
}

export default withRouter(connect(msp, mdp)(Amenities));