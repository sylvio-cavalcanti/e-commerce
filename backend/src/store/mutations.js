export function setUser(state, user) {
    state.user.data = user;
}

export function setToken(state, token) {
    // Saves token in the state
    // Save token in the session Storage if token is not a NULL (from the Logout action)
    state.user.token = token;
    if (token) {
        sessionStorage.setItem('TOKEN', token);
    } else {
        sessionStorage.removeItem('TOKEN');
    }
}