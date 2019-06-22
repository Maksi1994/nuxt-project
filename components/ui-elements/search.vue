<template>
    <div class="d-flex align-items-center wrap">
        <i class="fas fa-search mr-2"></i>
        <b-form-input class="border-0 input-field" v-model="searchText" placeholder="Seach..."
                      @input="emitChanges"></b-form-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            emitChanges() {
                this.$emit('search', this.searchText);
            }
        }
    }
</script>

<style scoped>
    .wrap {
        border-bottom: 1px solid gray;
    }

    .input-field {
        border: none !important;
        box-shadow: none;
    }
</style>