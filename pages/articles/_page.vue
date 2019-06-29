<template>
    <section>
        <div class="mb-5 d-flex">

            <div class="w-100 d-flex position-relative">
                <div class="mr-auto">
                    <popularity-selector class="mr-5 mb-5"
                                         @change="popularityFilter = $event; loadData()"></popularity-selector>
                    <search class="seach-input" @search="searchText = $event; loadData()"></search>
                </div>

                <div class="ml-3">
                    <date-selector @change="dateFilter = $event; loadData()"></date-selector>
                </div>
            </div>
        </div>
        <div>
            <articles-list></articles-list>

            <div class="mt-5 mb-5 mx-auto d-block w-100">
                <b-pagination
                        align="center"
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                ></b-pagination>
            </div>
        </div>
    </section>
</template>

<script>
    import ArticlesList from '~/components/articles/list.vue';
    import * as moment from 'moment';

    export default {
        layout: 'frontend',
        data() {
            return {
                dateFilter: null,
                popularityFilter: null,
                searchText: '',
                page: 1,
                perPage: 3,
                currentPage: 1,
                items: [{}, {}]
            }
        },
        methods: {
            loadData() {
                console.log(this.dateFilter);
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        },
        components: {
            ArticlesList,
        },
    };
</script>

<style scoped lang="scss">
    .seach-input {
        width: 350px;
        height: 39px;
    }
</style>