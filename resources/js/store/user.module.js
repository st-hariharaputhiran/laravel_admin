export const getDefaultState = () => {
    return {
        isLoggedin: false,
        token: null,
        userdet: null,
        role:null,
    };
};
// initial state
export const state = getDefaultState();
export default {
    state: {
        isLoggedin: false,
        token: null,
        userdet: null,
        role:null,
    },

    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        UPDATE_USER_TOKEN(state, payload) {
            state.token = payload;
        },
        UPDATE_USER_STATUS(state, payload) {
            state.isLoggedin = payload;
        },
        UPDATE_USER(state, payload) {
            state.userdet = payload;
        },
        UPDATE_USER_ROLE(state, payload) {
            state.role = payload;
        },
    },
    actions: {
        resetUserState({ commit }) {
            commit("resetState");
        },
        addUserTokenToState(context, payload) {
            var token = context.state.token;
            token = payload;
            context.commit("UPDATE_USER_TOKEN", token);
        },
        updateUserStatus(context, payload) {
            var ustatus = context.state.isLoggedin;
            ustatus = payload;
            context.commit("UPDATE_USER_STATUS", ustatus);
        },
        addUserToState(context, payload) {
            var userdet = context.state.userdet;
            userdet = payload;
            context.commit("UPDATE_USER", userdet);
        },
        addUserRoleToState(context, payload) {
            var role = context.state.role;
            role = payload;
            context.commit("UPDATE_USER_ROLE", role);
        },
    },
};
