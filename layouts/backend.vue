<template>
    <div>
        <backend-header></backend-header>
        <Nuxt/>
    </div>
</template>

<script>
    import BackendHeader from '~/components/backend-header.vue';

    export default {
        components: {
            BackendHeader
        }
    };
</script>
