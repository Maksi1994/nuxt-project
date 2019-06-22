<template>
    <section>
        <div class="list">
            <bloger-preview></bloger-preview>
        </div>
        <div class="pagination">
            {{list.length}}
        </div>
    </section>
</template>

<script>
    import One from './one/_id';

    export default {
        layout: 'frontend',
        asyncData() {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res({
                        list: [
                            {
                                id: 1,
                                name: 'Karpinka Maxim',
                                text: 'text100500'
                            }
                        ]
                    });

                    console.log('async loadin');
                }, 300);
            });
        },
        computed: {
            page() {
                return this.$route.params.page;
            }
        },
        methods: {
            load() {

            }
        },
        mounted() {
            console.log('asd')
            this.load();
        },
        components: {
            One
        }
    }
</script>

<style scoped>

</style>
