<template>
    <section>
        <h1>BLOGER PREVIEW</h1>

        <ul>
            <li v-for="item in list" :key="item">
                {{item}}
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "preview",
        props: {
          data: {
              list: [],
              required: true
          }
        },
        data() {
          return {
              list: []
          }
        },
        created() {
            setTimeout(() => {
                this.list.push('aaa', 'bbb')
            }, 300);
        }
    }
</script>

<style scoped>

</style>
