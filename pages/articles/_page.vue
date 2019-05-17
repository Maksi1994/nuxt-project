<template>
    <div>
        <articles-list></articles-list>
    </div>
</template>

<script>
    import ArticlesList from '~/components/articles/list.vue';

    export default {
        layout: 'frontend',
        data() {
            return {}
        },
        methods: {},
        components: {
            ArticlesList
        }
    };
</script>

<style scoped lang="scss">

</style>