<template>
    <section>
        <div class="list">
            <bloger-preview :data="{}"></bloger-preview>
        </div>
    </section>
</template>

<script>
    import One from './one/_id';

    export default {
        layout: 'frontend',
        data() {
          return {
              list: []
          }
        },
        created() {

        },
        components: {
            One
        }
    }
</script>

<style scoped lang="scss">

</style>
