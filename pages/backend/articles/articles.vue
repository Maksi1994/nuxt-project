<template>
        <router-view></router-view>
</template>
<script>
    import List from "./list.vue";
    import AddForm from "./add-form.vue";
    import Edit from "./edit.vue";

    export default {
        name: "articles",
        components: {
            List,
            AddForm,
            Edit,
        }
    }
</script>

<style scoped>

</style>
