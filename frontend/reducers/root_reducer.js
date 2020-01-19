import { combineReducers } from 'redux';

import entitiesReducer from "./entities_reducer";
import ui_reducer from './ui_reducer';

const RootReducer = combineReducers({
    ui: ui_reducer,
    entities: entitiesReducer
})

export default RootReducer;