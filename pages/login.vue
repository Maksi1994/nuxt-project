<template>
    <div>
        <div class="container">
            <b-form class="w-50 mx-auto" @submit.prevent="sendForm">
                <b-form-group
                        class="text-left"
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1">
                    <b-form-input
                            @blur="touchForm('email')"
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            :state="!$v.form.$anyError ? null :!$v.form.email.$invalid"
                            placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group class="text-left"
                              id="input-group-2"
                              label="Password"
                              label-for="input-1">
                    <b-form-input
                            :state="!$v.form.$anyError ? null : !$v.form.password.$invalid"
                            @blur="touchForm('password')"
                            id="input-2"
                            v-model="form.password"
                            type="password"
                            required
                            placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-button class="ml-auto d-block mt-4 pl-5 pr-5" type="submit" variant="primary"
                          :disabled="$v.form.$invalid">Login
                </b-button>
                <div class="mt-5 pl-2 py-2 border-top border-bottom errors-board"
                     :class="{
                        active: $v.form.$anyError
                }">
                    <b-form-invalid-feedback class="text-left" :state="!$v.form.email.$invalid">
                        - *Enter valid email address
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left" :state="!$v.form.password.$invalid">
                        - *Password must have minimum {{$v.form.password.$params.minLen.min}} chars
                    </b-form-invalid-feedback>
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
    import {required, email, minLength} from "vuelidate/lib/validators";
    import * as axios from "axios";
    import {mapActions} from "vuex";

    export default {
        layout: 'frontend',
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                submitted: false
            };
        },
        methods: {
            ...mapActions([
                "login"
            ]),
            sendForm() {
                this.submitted = true;

                if (!this.$v.$invalid) {
                    console.log("submit!");

                    this.login({
                        first_name: "Maxim",
                        last_name: "Karpinka"
                    });
                }
            },
            touchForm(fieldName) {
                this.$v.form[fieldName].$touch();
            }
        },
        created() {
            this.$store.subscribe((mutation) => {
                debugger;
                if (mutation.type === "login") {
                    this.$router.push("/");
                }
            });
        },
        validations: {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLen: minLength(6)
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        align-items: flex-end;
        height: calc(60vh - 100px);
    }

    .errors-board {
        height: 65px;
    }

    .errors-board:not(.active) {
        opacity: 0;
        pointer-events: none;
    }
</style>
