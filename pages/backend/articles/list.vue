<template>
    <div>
        <div class="table">

        </div>

        <div class="pagination">

        </div>
    </div>
</template>

<script>
    import Item from "./item.vue";

    export default {
        data() {
          return {
              page: 1,
              articles: []
          };
        },
        props: ["items"],
        methods: {
            load () {

            }
        },
        created() {
            this.load();
        },
        watch: {
          $route(from, to) {
              this.page = to.page;
          }
        },
        components: {
            Item
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .cart-item:nth-child(4n) {
        margin-right: 0;
    }
</style>
