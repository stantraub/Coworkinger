import { getSpaces, getOwnerSpaces, createSpace } from '../util/space_api_util';

export const RECEIVE_SPACES = "RECEIVE_SPACES";
export const RECEIVE_OWNER_SPACES = "RECEIVE_OWNER_SPACES";
export const RECEIVE_NEW_SPACE = "RECEIVE_NEW_SPACE";

export const receiveSpaces = spaces => ({
    type: RECEIVE_SPACES,
    spaces
})

export const receiveOwnerSpaces = spaces => ({
    type: RECEIVE_OWNER_SPACES,
    spaces
})

export const receiveNewSpace = space => ({
    type: RECEIVE_NEW_SPACE,
    space
})

export const fetchSpaces = () => dispatch => (
    getSpaces()
        .then(spaces => dispatch(receiveSpaces(spaces)))
        .catch(err => console.log(err))
)

export const fetchOwnerSpaces = (id) => dispatch => (
    getOwnerSpaces(id)
        .then(spaces => dispatch(receiveOwnerSpaces(spaces)))
        .catch(err => console.log(err))
)

export const createNewSpace = (data) => dispatch => (
    createSpace(data)
        .then(space => dispatch(receiveNewSpace(space)))
        .catch(err => console.log(err))
)