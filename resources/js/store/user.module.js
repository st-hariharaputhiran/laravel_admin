export const getDefaultState = () => {
    return {
        isLoggedin: false,
        token: null,
        userdet: null,
    };
};
// initial state
export const state = getDefaultState();
export default {
    state: {
        isLoggedin: false,
        token: null,
        userdet: null,
    },

    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        UPDATE_USER_TOKEN(state, payload) {
            state.token = payload;
            console.log("PAYLOAD", state.token);
        },
        UPDATE_USER_STATUS(state, payload) {
            state.isLoggedin = payload;
            console.log("PAYLOAD1", state.isLoggedin);
        },
        UPDATE_USER(state, payload) {
            console.log("PAYLOAD2", payload);
            state.userdet = payload;
            console.log("PAYLOAD2", state.userdet);
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
            console.log("PAYLOAD2", payload);
            userdet = payload;
            context.commit("UPDATE_USER", userdet);
        },
    },
};
