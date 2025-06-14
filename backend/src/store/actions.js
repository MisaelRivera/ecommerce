import axiosClient from '../axios.js';

export function login ({ commit }, data) {
    return axiosClient.post('/login', data)
        .then(({ data }) => {
            commit('setUser', data.user);
            commit('setToken', data.token);
            return data;
        });
}

export function logout ({ commit }) {
    return axiosClient.post('/logout')
        .then((response) => {
            commit('setToken', null);

            return response;
        })
        .catch(( response ) => {
            console.log(response);
        });
}

export function getUser ({ commit }) {
    return axiosClient.get('/user')
    .then(response => {
        commit('setUser', response.data);
        return response;
    });
}
