<template>
    <div class="haader-nav d-flex py-3 align-items-center border-bottom position-fixed mx-auto">

        <logo></logo>


        <div class="ml-5 pl-5">
            <b-nav pills>
                <b-nav-item to="/" active-class="active" exact>
                    <i class="fas fa-house-damage mr-1"></i>
                    Home
                </b-nav-item>
                <b-nav-item to="/articles" active-class="active">
                    <i class="far fa-newspaper mr-1"></i>
                    Articles
                </b-nav-item>
                <b-nav-item to="/blogers" exact-active-class="active">
                    <i class="fas fa-users mr-1"></i>
                    Blogers
                </b-nav-item>
                <b-nav-item to="/ratings" exact-active-class="active">
                    <i class="fas fa-flag-checkered mr-1"></i>
                    Ratings
                </b-nav-item>
                <b-nav-item to="/favorites" exact-active-class="active">
                    <i class="far fa-star mr-1"></i>
                    Favorites
                </b-nav-item>
            </b-nav>
        </div>

        <div v-if="isAuth" class="ml-auto d-flex align-items-center">
            <router-link v-if="isAuth" :to="'/backend'" class="mr-5">
                <b-button>Backend</b-button>
            </router-link>
            <router-link :to="'/profile'">
                <div class="user-line">
                    <i class="fas fa-user-circle mr-2 user-icon"></i>
                    <span>{{user.first_name}} {{user.last_name}}</span>
                </div>
            </router-link>
            <div class="logout ml-5" @click="logout">
                <b-button variant="outline-primary">Sign out</b-button>
            </div>
        </div>

        <div v-if="!isAuth" class="ml-auto d-flex ml-auto">
            <div class="logout">
                <router-link to="/login" class="mr-5">
                    <b-button variant="outline-primary">Sign in</b-button>
                </router-link>
                <router-link to="/regist">
                    <b-button variant="outline-primary">Sign up</b-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";
    import Logo from '~/components/logo.vue';

    export default {
        computed: {
            ...mapGetters([
                "isAuth",
            ]),
            ...mapState(['user'])
        },
        methods: {
            ...mapActions([
                "logout"
            ])
        },
        created() {
            this.$store.subscribe((mutation) => {
                if (mutation.type === "logout") {
                    this.$router.push("/");
                }
            });
        },
        components: {
            Logo
        }
    };
</script>

<style scoped lang="scss">
    .haader-nav {
        width: 100%;
        padding-left: 10%;
        padding-right: 10%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 99;
        background: #fff;
        box-shadow: 0 -1px 6px grey;
    }

    .user-line {
        display: flex;
        align-items: center;
        cursor: pointer;

        .user-icon {
            font-size: 25px;
            width: 30px;
            height: 30px;
        }
    }

</style>
