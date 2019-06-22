<template>
    <div>
        <b-button variant="warning" @click="toggleOrder">
            <i class="far fa-star mr-2"></i>
            <i class="fas fa-arrow-up" v-if="order === 'desc'"></i>
            <i class="fas fa-arrow-down" v-else></i>
        </b-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                order: 'desc'
            }
        },
        methods: {
            toggleOrder() {
                this.order = this.order === 'desc' ? 'asc' : 'desc';
                this.$emit('change', this.order);
            },
        }
    }
</script>

<style scoped>
    .far,
    .fas {
        color: #fff;
    }
</style>