import axios from 'axios';

export const getSpaces = () => {
    return axios.get('/api/spaces')
}

export const getOwnerSpaces = (id) => {
    return axios.get(`/api/spaces/user/${id}`)
}

export const createSpace = (data) => {
    return axios.post('/api/spaces', data)
}