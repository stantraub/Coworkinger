import * as APIUtil from '../util/space_api_util'

export const RECEIVE_ALL_SPACES = "RECEIVE_ALL_SPACES";
export const RECEIVE_SPACE = "RECEIVE_SPACE";
export const REMOVE_SPACE = "REMOVE_SPACE";

export const receiveAllSpaces = spaces => ({
    type: RECEIVE_ALL_SPACES,
    spaces
})

export const receiveSpace = space => ({
    type: RECEIVE_SPACE,
    space
})

export const removeSpace = spaceId => ({
    type: REMOVE_SPACE,
    spaceId
})

export const fetchSpaces = () => dispatch => {
    return APIUtil.fetchSpaces()
        .then(spaces => dispatch(receiveAllSpaces(spaces)))
}

export const fetchSpace = (id) => dispatch => {
   return APIUtil.fetchSpace(id)
    .then(space => dispatch(receiveSpace(space)))
}

export const createSpace = (space) => dispatch => {
    return APIUtil.createSpace(space)
        .then(space => dispatch(receiveSpace(space)))
}

export const updateSpace = (space) => dispatch => {
    return APIUtil.updateSpace(space)
        .then(space => dispatch(receiveSpace(space)))
}

export const deleteSpace = (spaceId) => dispatch => {
    return APIUtil.deleteSpace(spaceId)
        .then(space => dispatch(removeSpace(space)))
}