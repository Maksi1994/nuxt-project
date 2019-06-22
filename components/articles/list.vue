<template>
    <div>
        <div class="d-flex flex-wrap list justify-content-between">
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
            <one-preview class="mb-5 preview"></one-preview>
        </div>
    </div>
</template>

<script>
    import OnePreview from './one-preview.vue';

    export default {
        data() {
            return {}
        },
        components: {
            OnePreview
        }
    };
</script>

<style scoped lang="scss">
    .list {
        .preview {
            width: 45%;
        }
    }
</style>