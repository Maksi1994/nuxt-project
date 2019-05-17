<template>
    <router-link :to="'/'">
        <div class="logo">
            <i class="fas fa-bold"></i>
            LOG.COM
        </div>
    </router-link>
</template>

<style scoped>

    a {
        text-decoration: none;
    }

    .logo {
        text-decoration: none;
        display: flex;
    }

    i {
        margin-right: 3px;
        font-size: 20px;
    }
</style>