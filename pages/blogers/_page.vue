<template>
    <section>
        <div class="tools mb-5 justify-content-between align-items-center">
            <div class="mr-auto d-flex mb-5">
                <popularity-selector class="mr-4"
                                     @change="popularityFilter = $event; loadData()"></popularity-selector>

                <view-count-selector></view-count-selector>
            </div>

            <search class="search"></search>
        </div>

        <div>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <bloger-preview class="blog-preview" type="box"></bloger-preview>
                <bloger-preview class="blog-preview" type="box"></bloger-preview>
                <bloger-preview class="blog-preview" type="box"></bloger-preview>
            </div>

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
    import BlogerPreview from '~/components/blogers/one-preview.vue';

    export default {
        layout: 'frontend',
        data() {
            return {
                currentPage: 1,
                perPage: 15,
                rows: 5,
                popularityFilter: null
            }
        },
        methods: {
            loadData() {

            }
        },
        components: {
            BlogerPreview
        }
    };
</script>

<style scoped lang="scss">
    .search {
        width: 350px;

    }

    .blog-preview {
        width: 45%;
        margin-bottom: 40px;
    }
</style>