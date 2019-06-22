export default = {
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
    nuxtServerInit(context) {
      setTimeout(() => {
        console.log('nuxtServerInit');
        context.commit('fillData', {
          blogers: [1,2,3],
          posts: [2,4,6]
        });
      }, 1000);
    },
    toggleFavorite(context, {type, id}) {
      setTimeout(() => {
        context.commit('toggle', {type, id})
      }, 1000);
    }
  }
}
