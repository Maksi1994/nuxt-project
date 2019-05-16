<template>
    <div>
        <b-card
                :title="item.title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
                {{item.body}}
            </b-card-text>

            <b-button variant="primary">Edit</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "",
        props: ["item"]
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
