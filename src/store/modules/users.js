const state = {
    users: [
        {
            id: 1,
            email: 'john@demo.com'
        }
    ],
    authUser: localStorage.getItem('authUser') || null
};
const getters = {
    getUsers: state => state.users,
    getUserByEmail: (_, getters) => email => getters.getUsers.find(user => user.email === email),
    isLoggedIn: state => {
        return state.authUser !== null;
    }
};
const mutations = {
    SET_AUTH_USER (state, email) {
        state.authUser = email;
        localStorage.setItem('authUser', state.authUser);
    },
    LOGOUT_USER (state) {
        state.authUser = null;
        localStorage.removeItem('authUser');
    }
};
const actions = {
    login({ getters, commit }, email) {
        const user = getters.getUserByEmail(email);
        if(!user) {
            throw Error('Invalid credentials');
        }
        commit('SET_AUTH_USER', user.email);
    },
    logout({ commit }) {
        commit('LOGOUT_USER');
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}