import Vue from "vue";
import Vuex from "vuex";
import favorites from './modules/favorites';
import auth from './modules/auth';
import cookies from './modules/cookies';

Vue.use(Vuex);

const store = () => new Vuex.Store({
    namespaced: true,
    actions: {
        async nuxtServerInit({dispatch, commit,}, {req, store}) {
            commit('cookies/initCookies', req);
            await dispatch('auth/loadAppData', store);
        }
    },
    modules: {
        favorites,
        auth,
        cookies
    }
});

export default store;
