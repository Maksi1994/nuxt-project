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
</template>

<script>
    import OnePreview from './one-preview.vue';

    export default {
        data() {
            return {
                perPage: 3,
                currentPage: 1,
                items: [{}, {}]
            };
        },
        computed: {
            rows() {
                return this.items.length
            }
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