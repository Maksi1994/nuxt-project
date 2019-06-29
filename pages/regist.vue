<template>
    <div>
        <h1 class="text-center"><i class="fas fa-user mr-3"></i> Sign up</h1>
        <div class="container">
            <b-form class="w-50 mx-auto" @submit.prevent="regist">
                <b-form-group
                        class="text-left"
                        label="First Name:"
                        label-for="input-1">
                    <b-form-input
                            @blur="touchForm('first_name')"
                            v-model="form.first_name"
                            type="text"
                            required
                            :state="!$v.form.first_name.$dirty ? null : !$v.form.first_name.$invalid"
                            placeholder="First Name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        class="text-left"
                        label="Last Name:"
                        label-for="input-1">
                    <b-form-input
                            @blur="touchForm('last_name')"
                            v-model="form.last_name"
                            type="text"
                            required
                            :state="!$v.form.last_name.$dirty ? null :!$v.form.last_name.$invalid"
                            placeholder="Last Name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        class="text-left"
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1">
                    <b-form-input
                            @input="onChangeEmail"
                            @blur="(!$v.form.email.email || !$v.form.email.required) && touchForm('email')"
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            :state="!$v.form.email.$dirty ? null : !$v.form.email.$invalid"
                            placeholder="Email"
                    ></b-form-input>
                </b-form-group>
                <b-form-group class="text-left"
                              id="input-group-2"
                              label="Password:"
                              label-for="input-1">
                    <b-form-input
                            :state="!$v.form.password.$dirty ? null : !$v.form.password.$invalid"
                            @blur="touchForm('password')"
                            id="input-2"
                            v-model="form.password"
                            type="password"
                            required
                            placeholder="Password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group class="text-left"
                              label="Confirm Password:"
                              label-for="input-1">
                    <b-form-input
                            :state="!$v.form.confirm_password.$dirty ? null : !$v.form.confirm_password.$invalid"
                            @blur="touchForm('confirm_password')"
                            v-model="form.confirm_password"
                            type="password"
                            required
                            placeholder="Confirm Password"
                    ></b-form-input>
                </b-form-group>

                <b-button class="ml-auto d-block mt-4 pl-5 pr-5" type="submit" variant="primary"
                          :disabled="$v.form.$invalid">Regist
                </b-button>
                <div class="mt-5 pl-2 py-2 border-top errors-board"
                     :class="{
                        active: $v.form.$anyDirty
                }">
                    <b-form-invalid-feedback class="text-left"
                                             :state="!$v.form.first_name.$dirty || !$v.form.first_name.$invalid">
                        - *First name must have min 3 chars
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left"
                                             :state="!$v.form.last_name.$dirty ||  !$v.form.last_name.$invalid">
                        - *First last must have min 3 chars
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left"
                                             :state="!$v.form.email.$dirty || ($v.form.email.required ?  $v.form.email.email : false)">
                        - *Enter valid email address
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left"
                                             :state="$v.form.email.email ? $v.form.email.unique : true">
                        - *Choose another email, email is already being using
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left"
                                             :state="!$v.form.password.$dirty || !$v.form.password.$invalid">
                        - *Password must have minimum {{$v.form.password.$params.minLen.min}} chars
                    </b-form-invalid-feedback>

                    <b-form-invalid-feedback class="text-left"
                                             :state="!$v.form.confirm_password.$dirty || !$v.form.confirm_password.$invalid">
                        - *Confirm Password must be the same as password
                    </b-form-invalid-feedback>
                </div>
            </b-form>
        </div>
    </div>

</template>

<script>
    import {required, email, minLength, sameAs} from "vuelidate/lib/validators";

    export default {
        layout: 'frontend',
        data() {
            return {
                form: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    checkingEmailId: false
                }
            };
        },
        methods: {
            regist() {
                console.log(this.form);

                this.$router.push({
                    path: "/"
                });
            },
            touchForm(fieldName) {
                this.$v.form[fieldName].$touch();
            },
            onChangeEmail() {
                if (!this.$v.form.email.email) {
                    return;
                }

                if (this.checkingEmailId) {
                    clearTimeout(this.checkingEmailId);
                }

                this.checkingEmailId = setTimeout(() => {
                    this.$v.form.email.$touch();
                }, 300);
            }
        },
        validations: {
            form: {
                first_name: {
                    required,
                    minLen: minLength(3),
                },
                last_name: {
                    required,
                    minLen: minLength(3),
                },
                email: {
                    required,
                    email,
                    unique: function (val) {
                        if (!val.length || !this.$v.form.email.email) {
                            return true;
                        }

                        return new Promise((res, rej) => {
                            setTimeout(() => {
                                res(this.form.email === "mak55755@gmail.com");
                            }, 700);
                        });
                    }
                },
                password: {
                    required,
                    minLen: minLength(6),
                },
                confirm_password: {
                    required,
                    sameAsPassword: sameAs("password"),
                    minLen: minLength(6)
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        display: flex;
        align-items: flex-end;
        height: calc(100vh - 100px);
    }

    .errors-board {
        height: 200px;
    }

    .errors-board:not(.active) {
        opacity: 0;
        pointer-events: none;
    }
</style>
