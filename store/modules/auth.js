const Cookie = process.client ? require('js-cookie') : undefined;

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        isAuth: (state) => !!state.user,
        isAdmin: (state) => false
    },
    mutations: {
        login: (state, userData) => {
            state.user = userData;
            Cookie.set('auth', '1');
        },
        logout: (state) => {
            Cookie.set('auth', '0');
            state.user = null;
        },
        loadAppData: (state, appData) => {
            state.user = appData.user;
        }
    },
    actions: {
        loadAppData: ({commit}, nuxtStore) => {
            return new Promise((res, rej) => {
                let isAuth = nuxtStore.state.cookies.data.auth;

                if (isAuth == false) {
                    commit("loadAppData", {
                        user: null
                    });
                    res();
                } else {
                    setTimeout(() => {
                        commit("loadAppData", {
                            user: {
                                first_name: "Maxim",
                                last_name: "Karpinka"
                            }
                        });
                        res();
                    }, 300);
                }
            });
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
};
