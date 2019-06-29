export default {
    namespaced: true,
    state: {
        favoritesList: {
            blogers: [],
            posts: [],
        }
    },
    mutations: {
        toggle(state, {type, id}) {
            const index = state.favoritesList[type].indexOf(id);

            if (index === -1) {
                state.favoritesList[type].push(index);
            } else {
                state.favoritesList[type].splice(index, 1);
            }
        },
        fillData(state, appData) {
            state.favoritesList = appData;
        }
    },
    actions: {
        async loadSome({commit}) {
            const data = await new Promise((res, rej) => {
                setTimeout(() => {
                    res({
                        blogers: [
                            {
                                id: 1,
                                name: 'Maxim Karpinka'
                            },
                            {
                                id: 2,
                                name: 'Maxim Vanin'
                            },
                            {
                                id: 3,
                                name: 'Maxim Petrov'
                            }
                        ],
                        articles: [
                            {
                                id: 4,
                                title: 'Title',
                                text: 'bla bla bla'
                            },
                            {
                                id: 5,
                                title: 'Title',
                                text: 'bla bla bla'
                            },
                            {
                                id: 6,
                                title: 'Title',
                                text: 'bla bla bla'
                            }
                        ]
                    });
                }, 1000);
            });

            commit('fillData', data);
        },
        toggleFavorite(context, {type, id}) {
            setTimeout(() => {
                context.commit('toggle', {type, id})
            }, 1000);
        }
    }
}
