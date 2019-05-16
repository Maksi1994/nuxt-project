<template>
    <div class="w-100">
        <b-button variant="outline-primary d-block ml-auto" @click="close">Close</b-button>

        <b-form class="mt-5" @submit.prevent="save">
            <b-form-group
                    id="input-group-1"
                    label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.title"
                        type="text"
                        required
                        placeholder="Title"
                ></b-form-input>
            </b-form-group>

            <b-form-textarea
                    id="textarea-large"
                    size="lg"
                    v-bind="form.body"
                    placeholder="Article body..."
            ></b-form-textarea>
            <div class="mr-5 mt-5 d-flex justify-content-end">
                <b-button class="mr-4" type="reset" variant="danger">Reset</b-button>
                <b-button class="submit-btn" type="submit" variant="primary">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: "",
        props: [],
        data() {
            return {
                form: {
                    title: null,
                    body: null,
                    files: []
                }
            };
        },
        methods: {
            close() {
                this.$emit("close");
            },
            save() {
                console.log(this.form);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .submit-btn {
        width: 200px;
    }
</style>
