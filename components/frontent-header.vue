<template>
    <div class="haader-nav">
        <router-link :to="'/'">
            <div class="logo">
                Blog.com
            </div>
        </router-link>

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
                <router-link :to="'login'" class="mr-5">
                    <b-button variant="outline-primary">Sign in</b-button>
                </router-link>
                <router-link :to="'regist'">
                    <b-button variant="outline-primary">Sign up</b-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                "isAuth",
            ]),
            user() {
                return this.$store.state.user;
            }
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
        }
    };
</script>

<style scoped lang="scss">
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
