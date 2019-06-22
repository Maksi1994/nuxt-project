<template>
    <div @click="toggleFavorite" class="btn p-0">
        <i class="far fa-bookmark" :class="{fas: isFavorite}"></i>
    </div>
</template>

<script>
    export default {
        props: {
            type: String,
            id: Number
        },
        data() {
            return {
                isFavorite: false
            }
        },
        methods: {
            toggleFavorite() {
                this.isFavorite = !this.isFavorite;
            }
        }
    }
</script>

<style scoped lang="scss">
    .btn {
        cursor: pointer;
    }

    .far {
        font-size: 30px;
        color: #f4c242;
    }
</style>