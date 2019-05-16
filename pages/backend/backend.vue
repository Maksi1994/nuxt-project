<template>

</template>

<script>

    export default {
        name: 'backend',
        data: function () {
            return {
                editionIndex: null,
                addingItem: false,
                page: 1,
                elementsList: [
                    {
                        id: 1,
                        title: "Item Title 1",
                        body: "Item Body 1"
                    },
                    {
                        id: 2,
                        title: "Item Title 2",
                        body: "Item Body 1"
                    }
                ]
            };
        },
        watch: {
            page() {
                this.loadData();
            }
        },
        methods: {
            created() {
                this.loadData();
            },
            loadData() {
                this.$http.post("main/get-most-popular-articles")
                    .then(
                        (res) => {
                            console.log(res);
                        },
                        (err) => {
                            console.log(err);

                        });
            },
            changePage(page) {
                this.page = page;
            },
            openEdition(index) {
                this.editionIndex = index;
            },
            toggleAddingItem() {
                this.addingItem = !this.addingItem;
            }
        }
    };
</script>

<style scoped>

</style>
