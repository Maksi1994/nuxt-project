<template>
    <div>
        <frontend-header></frontend-header>
        <div class="container content-wrap px-0">
            <Nuxt/>
        </div>
    </div>
</template>

<script>
    import FrontendHeader from '~/components/frontend-header.vue';

    export default {
        components: {
            FrontendHeader
        }
    };
</script>

<style scoped lang="scss">
    .content-wrap {
        padding-top: 150px;
    }
</style>