import { RECEIVE_SPACES,
    RECEIVE_OWNER_SPACES, 
    RECEIVE_NEW_SPACE } 
from '../actions/space_actions'

const SpacesReducer = (state = {all: {}, user: {}, new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_SPACES:
            newState.all = action.spaces.data;
            return newState;
        case RECEIVE_OWNER_SPACES:
            newState.user = action.spaces.data;
            return newState;
        case RECEIVE_NEW_SPACE:
            newState.new = action.space.data;
            return newState;
        default:
            return state;
    }
}

export default SpacesReducer;