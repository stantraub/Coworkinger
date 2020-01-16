import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions'

const msp = ({ errors }) => {
    return {
        errors: errors.session
    };
};

const mdp = (dispatch) => ({
        login: user => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
})


export default withRouter(connect(msp, mdp)(LoginForm));