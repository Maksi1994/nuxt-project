<template>
    <div>
        <one-article post-id="$route.params.id"></one-article>
    </div>
</template>

<script>
    import OneArticle from '~/components/articles/one.vue';

    export default {
        layout: 'frontend',
        components: {
            OneArticle
        }
    };
</script>