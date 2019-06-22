<template>
    <div class="">

        <div class="most-popular mb-5 d-flex justify-content-between flex-wrap">
            <h1 class="w-100 mb-5">Most popular</h1>
            <article-preview class="post"></article-preview>
            <article-preview class="post"></article-preview>
            <article-preview class="post"></article-preview>
        </div>

        <div class="most-popular mb-5 d-flex justify-content-between flex-wrap">
            <h1 class="w-100 mb-5">Top 10 Blogers</h1>
            <b-list-group class="w-100">
                <bloger-preview></bloger-preview>
                <bloger-preview></bloger-preview>
                <bloger-preview></bloger-preview>
            </b-list-group>
        </div>


        <div class="last-added d-flex justify-content-between flex-wrap mb-5">
            <h1 class="w-100 mb-5">Last added</h1>
            <article-preview class="post"></article-preview>
            <article-preview class="post"></article-preview>
            <article-preview class="post"></article-preview>
        </div>

    </div>
</template>

<script>
    import ArticlePreview from '~/components/articles/one-preview';
    import BlogerPreview from '~/components/blogers/one-preview';

    export default {
        layout: 'frontend',
        components: {
            ArticlePreview,
            BlogerPreview
        }
    };
</script>

<style scoped lang="scss">
    .most-popular,
    .last-added {
        .post {
            width: 30%;
        }
    }
</style>