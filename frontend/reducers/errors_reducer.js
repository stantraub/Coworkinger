import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_api_reducer';

export default combineReducers({
    session: SessionErrorsReducer
})