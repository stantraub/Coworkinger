import { combineReducers } from 'redux';
import spaces from './space_reducer'
import ui from './ui_reducer';

const RootReducer = combineReducers({
    ui,
    spaces
})

export default RootReducer;