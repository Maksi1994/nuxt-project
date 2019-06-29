<template>
    <div>
        <div v-if="type === 'box'">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                    <b-col md="4">
                        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6" class="position-relative">
                        <b-card-body style="font-size: 15px"
                                     class="d-flex flex-column justify-content-between h-100  pl-3">
                            <div class="mb-auto">
                                <h4>Karpinka Maxim</h4>
                                <b-badge variant="primary" pill>14 Articles</b-badge>
                                <view-count class="mt-2">45</view-count>
                            </div>

                            <b-button block variant="primary" size="sm"
                                      class="button ml-auto mt-auto read-articles-btn">
                                Read Articles
                            </b-button>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div v-else>
            <b-list-group-item
                    class="d-flex align-items-center border-left-0 border-right-0 py-3 wrap">
                <h3 class="mr-3 index">#1</h3>
                <b-img center src="https://picsum.photos/125/125/?image=58" left class="mr-3 ml-0 avatar"
                       alt="Center image"></b-img>
                <span class="name">Karpinka Maxim</span>


                <b-badge variant="primary" class="ml-5" pill>14 Articles</b-badge>
                <favorite-btn class="mx-auto"></favorite-btn>
                <b-button size="sm" class="ml-5 px-5">Read More</b-button>
            </b-list-group-item>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: String
        },
        components: {}
    };
</script>

<style scoped lang="scss">

    .read-articles-btn {
        position: absolute;
        right: -75px;
        bottom: 10px;
        width: 170px;
    }

    .wrap {
        display: flex;
        align-items: center;
    }

    .index {
        margin: 0;
        font-size: 18px;
    }

    .avatar {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    .name {
        font-size: 20px;
    }
</style>