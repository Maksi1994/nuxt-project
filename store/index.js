import Vue from "vue";
import Vuex from "vuex";
import * as axios from "axios";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        user: null,
        isInit: false,
    },
    getters: {
        isAuth: (state) => !!state.user,
        isAdmin: (state) => false
    },
    mutations: {
        login: (state, userData) => {
            state.user = userData;
        },
        logout: (state) => {
            state.user = null;
        },
        loadAppData: (state, appData) => {
            state.isInit = true;
            state.user = appData.user;
        }
    },
    actions: {
        loadAppData: ({commit}) => {
            setTimeout(() => {
                commit("loadAppData", {
                    user: {
                        first_name: "Maxim",
                        last_name: "Karpinka"
                    }
                });
            }, 1000);
        },
        login: ({commit}, payload) => {
            setTimeout(() => {
                commit("login", payload);

            }, 1000);
        },
        logout: ({commit}) => {
            setTimeout(() => {
                commit("logout");

            }, 1000);
        }
    }
});

export default store
