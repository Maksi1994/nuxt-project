<template>
    <div>
        <b-card-group deck class="position-relative">
            <favorite-btn class="mr-auto favorite-btn"></favorite-btn>
            <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top
                    class="b-card"
                    img-height="220">
                <b-card-text class="text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </b-card-text>
                <div class="ml-auto d-flex">
                    <router-link to="articles/one/1" сlass="d-block">
                        <b-button block variant="primary" class="button">Read All</b-button>
                    </router-link>
                </div>
                <div slot="footer">
                    <div class="d-flex">
                        <small class="text-muted">Last updated 3 mins ago</small>

                        <view-count class="ml-auto">35</view-count>
                    </div>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import FrontendHeader from '~/components/frontend-header.vue';

    export default {
        data() {
            return {
                styles: {
                    small: {
                        border: 'none',
                    }
                }
            }
        },
        methods: {},
        created() {
            console.log(this.size);
        }
    };
</script>

<style scoped>
    .favorite-btn {
        position: absolute;
        z-index: 2;
        top: 20px;
        right: 35px;
    }

    .text {
        font-size: 14px;
    }

    .b-card {
        border: none;
    }

    .button {
        margin-left: auto;
        width: 100px;
        font-size: 12px;
    }
</style>