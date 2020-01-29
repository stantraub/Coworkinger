import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AmenitiesContainer from './amenities_modal_container'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'amenities':
            component = <AmenitiesContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));