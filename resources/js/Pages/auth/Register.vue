<template lang="">
    <div class="register-box">
        <div class="register-logo">
            <a href=""><b>Sumanas</b></a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
                <p class="login-box-msg">Register a new membership</p>

                <form method="post" action="">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            name="fullname"
                            class="form-control"
                            placeholder="Full name"
                            v-model="state.fullname"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>

                        <span
                            v-if="v$.fullname.$error"
                            class="invalid-feedback"
                            role="alert"
                        >
                            <strong>{{
                                v$.fullname.$errors[0].$message
                            }}</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="state.email"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>

                        <span
                            v-if="v$.email.$error"
                            class="invalid-feedback"
                            role="alert"
                        >
                            <strong>{{ v$.email.$errors[0].$message }}</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="state.password.password"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>

                        <span
                            v-if="v$.password.password.$error"
                            class="invalid-feedback"
                            role="alert"
                        >
                            <strong>{{
                                v$.password.password.$errors[0].$message
                            }}</strong>
                        </span>
                    </div>

                    <div class="input-group mb-3">
                        <input
                            type="password"
                            name="password_confirmation"
                            class="form-control"
                            placeholder="Retype password"
                            v-model="state.password.confirm"
                        />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>

                        <span
                            v-if="v$.password.confirm.$error"
                            class="invalid-feedback"
                            role="alert"
                        >
                            <strong>{{
                                v$.password.confirm.$errors[0].$message
                            }}</strong>
                        </span>
                    </div>

                    <div class="row">
                        <!-- /.col -->
                        <div class="col-4">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                                @click="submitForm"
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
import useValidate from '@vuelidate/core';
import { reactive, computed } from "vue";
import {
    required,
    email,
    minLength,
    sameAs,
    helpers, // include helper functions from Vuelidate
} from "@vuelidate/validators";

export default {
    name: "Register",
    setup() {
        const state = reactive({
            fullname: "",
            email: "",
            password: {
                password: "",
                confirm: "",
            },
        });
        const rules = computed(() => {
            return {
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
                        sameAs: sameAs(state.password.password),
                    },
                },
            };
        });

        const v$ = useValidate(rules, state);

        return { state, v$ };
    },
    methods: {
        submitForm() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        this.registerUser(this.state);
        alert('Form successfully submitted.')
      } else {
        alert('Form failed validation')
        return false;
      }
    },
    async registerUser(state) {
            try {
                let res = await axios.post("/api/register", state);
                toastr.success("Post updated Successfully");
            } catch (error) {
                let errors = error.response.data.errors;
                for (let key in errors) {
                    toastr.error(errors[key]);
                }
            }
        },
  },
};
</script>
<style lang=""></style>
