<template>
    <div>
        <div class="d-flex">
            <b-button variant="outline-primary" class="mb-5 d-block ml-auto" @click="toggleEditingArticle">Edit
            </b-button>
            <b-button variant="outline-danger" class="mb-5 d-block ml-4" @click="deleteArticle">Delete</b-button>
        </div>

        <div v-if="!isEdit">
            Hello
        </div>
        <editor v-else></editor>
    </div>
</template>

<script>
    import Editor from '~/components/articles/editor';

    export default {
        props: {
            postId: {
                required: false
            },
        },
        data() {
            return {
                post: null,
                isEdit: false
            }
        },

        methods: {
            created() {
                this.load(this.postId);
            },
            load(id) {
                console.log('Load Article')
            },
            toggleEditingArticle() {
                this.isEdit = !this.isEdit;
            },
            deleteArticle() {

            }
        },
        components: {
            Editor
        }
    }
</script>

<style scoped>

</style>