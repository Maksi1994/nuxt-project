<template>
    <div>
        <div class="d-flex list w-100 py-5">
            <router-link to="/favorites" class="mr-3">
                <span>All</span>
            </router-link>
            <router-link to="/favorites/blogers" class="mr-3">
                <span>Blogers</span>
            </router-link>
            <router-link to="/favorites/articles" class="mr-3">
                <span>Articles</span>
            </router-link>
        </div>
        <ul v-if="type === 'articles'">
            <li v-for="item in list" :key="item.id">
                {{item.title}} {{item.body}}
            </li>
        </ul>

        <ul v-if="type === 'blogers'">
            <li v-for="item in list" :key="item.id">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import * as _ from 'lodash';

    export default {
        name: 'favorites',
        layout: 'frontend',
        computed: {
            ...mapState('favorites', [
                'favoritesList'
            ]),
            type() {
              return this.$route.params.type || 'all';
            },
            list() {
                let list = this.favoritesList[this.type];

                if (this.type === 'all') {
                    list = [];

                    _.forOwn(this.favoritesList, (items) => {
                        list.push(...items);
                    });
                }

                return list;
            }
        },
        data() {
            return {
            }
        },
        async fetch({isServer, store, params}) {
            await store.dispatch('favorites/loadSome');
        },
        created() {
            console.log(this.list);
        }
    }
</script>

<style scoped lang="scss">
    .list {
        list-style: none;

        li {
            list-style: none;
        }
    }
</style>
