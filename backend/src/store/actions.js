import axiosClient from "../axios";

export function login({commit}, data) {
    return axiosClient.post('/login', data)
        .then(({data}) => {
            // This is what we return from the AuthController.php
            // We save this information in the store state
            commit('setUser', data.user)
            commit('setToken', data.token)
            console.log('Actions res: ', data);
            return data; // This is what is return as the 'response' in the method login() in the Login.vue component
        })
        .catch((err) => {
            console.log('Actions erro: ', err);
            return err;
        })
}

export function logout({commit}) {
    return axiosClient.post('/logout')
        .then((response) => {
            commit('setToken', null)
            return response
        })
}