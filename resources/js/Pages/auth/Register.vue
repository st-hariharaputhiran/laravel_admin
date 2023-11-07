<template lang="">
    <div class="register-box">
        <div class="register-logo">
            <a href=""><b>Sumanas</b></a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>

                <form method="post" @submit.prevent="submitForm" action="">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            name="fullname"
                            class="form-control"
                            placeholder="Full name"
                            v-model="model.fullname"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>

                        <span
                        v-if="model.fullname == '' && v$.model.fullname.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Enter Your Fullname</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="model.email"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>

                        <span
                        v-if="model.email == '' && v$.model.email.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Email is Required</strong>
                        </span>
                        <span
                        v-if="model.email && v$.model.email.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Enter valid Email</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="model.password.password"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>

                        <span
                        v-if="model.password.password == '' && v$.model.password.password.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Enter Password</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="password"
                            name="password_confirmation"
                            class="form-control"
                            placeholder="Retype password"
                            v-model="model.password.confirm"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>

                        <span
                        v-if="model.password.confirm == '' && v$.model.password.confirm.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Enter Confirm Password</strong>
                        </span>
                        <span
                        v-if="model.password.confirm && v$.model.password.confirm.$error"
                            class="invalid-feedback"
                            role="alert" style="display:block"
                        >
                            <strong>Password and Confirm Password should be same</strong>
                        </span>
                    </div>

                    <div class="row">
                        <!-- /.col -->
                        <div class="col-4">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                            >
                                Register
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <a href="" class="text-center">I already have a membership</a>
            </div>
            <!-- /.form-box -->
        </div>
        <!-- /.card -->

        <!-- /.form-box -->
    </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import toastr from "toastr";
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    sameAs,
    helpers, // include helper functions from Vuelidate
} from "@vuelidate/validators";

export default {
    name: "Register",
    data: (vm) => ({
            v$: useVuelidate(),
            model: {
                fullname: "",
                email: "",
                password: {
                    password: "",
                    confirm: "",
                },
            },
        }),
    validations() {
        return {
            model: {
            fullname: {
                required,
            },
            email: {
                required,
                email,
            },
            password: {
                password: { required, minLength: minLength(6) },
                confirm: {
                    required,
                    sameAs: sameAs(this.model.password.password),
                },
            },
        }
    }
    },
    methods: {
        submitForm() {
            console.log(this.v$);

            this.v$.model.$validate(); // checks all inputs
            console.log("VMODEL",this.v$.model)
            console.log("ERRORS",this.model.fullname)
            if (!this.v$.model.$error) {
                // if ANY fail validation
                this.registerUser(this.model);
            } else {
                console.log("ERRORS", this.v$.model.$error);
                return;
            }
        },
        async registerUser(model) {
            try {
                let res = await axios.post("/api/register", model);
                console.log("RES",res);
                toastr.success("User created successfully");
                //router.push('login');
                this.$router.push({ path: 'login' })
                //return;
            } catch (error) {
                console.log("ERROR",error);
                // let errors = error.response.data.errors;
                // for (let key in errors) {
                //     toastr.error(errors[key]);
                // }
                return
            }
        },
    },
};
</script>
<style lang=""></style>
