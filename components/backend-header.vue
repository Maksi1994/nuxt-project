<template>
    <div class="haader-nav">
        <router-link :to="'/'">
            <div class="logo">
                Blog.com
            </div>
        </router-link>
        <b-nav pills class="menu">
            <b-nav-item :to="'/backend'" :active-class="'active'" :exact="true">Overview</b-nav-item>
            <b-nav-item :to="'/backend/articles'" :active-class="'active'" :exact="true">Articles</b-nav-item>
            <b-nav-item :to="'/backend/users'" :active-class="'active'" :exact="true">Users</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>

</style>
