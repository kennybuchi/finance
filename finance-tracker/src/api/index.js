import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const addUser = payload => api.post('/user', payload)
export const updateFinanceByID = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUser = id => api.delete(`/user/${id}`)
export const getUserByID = id => api.get(`/user/${id}`)
export const getUserByName = name => api.get(`/user/name/${name}`)

const apis = {
    addUser,
    updateFinanceByID,
    deleteUser,
    getUserByID,
    getUserByName,
}

export default apis