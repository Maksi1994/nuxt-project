<template>
    <div>
        <b-card-group deck>
            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top
                    img-height="250">
                <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                <div class="w-25 ml-auto">
                    <router-link to="articles/one/1">
                        <b-button block variant="primary">Read All</b-button>
                    </router-link>
                </div>
                <div slot="footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import FrontendHeader from '~/components/frontend-header.vue';

    export default {
        data() {
            return {}
        },
        methods: {}
    };
</script>

<style scoped>
    b-card-text {
        font-size: 20px;
    }
</style>