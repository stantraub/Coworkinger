import { combineReducers } from "redux";

import spacesReducer from "./space_reducer";

const entitiesReducer = combineReducers({
  spaces: spacesReducer
});

export default entitiesReducer;
