<template lang="">
    <div class="login-box">
            <div class="login-logo">
                <a href=""><b>Sumanas</b></a>
            </div>
            <!-- /.login-logo -->

            <!-- /.login-box-body -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form method="post" @submit.prevent="submitForm" action="">

                        <div class="input-group mb-3">
                            <input type="email" name="email"  placeholder="Email"
                                class="form-control"  v-model="model.email">
                            <div class="input-group-append">
                                <div class="input-group-text"><span class="fas fa-envelope"></span></div>
                            </div>
                            
                                <span v-if="model.email == '' && v$.model.email.$error" class="error invalid-feedback" style="display:block">
                                <strong>Enter User Email</strong>
                                </span>
                            
                        </div>

                        <div class="input-group mb-3">
                            <input type="password" name="password" placeholder="Password"
                                class="form-control"  v-model="model.password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                            
                                <span v-if="model.password == '' && v$.model.password.$error" class="error invalid-feedback" style="display:block">
                                <strong>Enter Password</strong>
                                </span>
                            

                        </div>

                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">Remember Me</label>
                                </div>
                            </div>

                            <div class="col-4">
                                <button type="submit" style="background-color: #007bff !important;border-color: #007bff;" class="btn btn-primary btn-block">Sign In</button>
                            </div>

                        </div>
                    </form>

                    <p class="mb-1">
                        <a href="">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <a href="" class="text-center">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>

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
    name: "Login",
    data: (vm) => ({
            v$: useVuelidate(),
            model: {
                email: "",
                password: "",
            },
        }),
    validations() {
        return {
            model: {
            email: {
                required,
            },
            password: { required },
                
        }
    }
    },
    methods: {
        submitForm() {
            console.log(this.v$);

            this.v$.model.$validate(); // checks all inputs
            
            if (!this.v$.model.$error) {
                // if ANY fail validation
                this.loginUser(this.model);
            } else {
                console.log("ERRORS", this.v$.model.$error);
                return;
            }
        },
        async loginUser(model) {
            try {
                let res = await axios.post("/api/login", model);
                
                if(res.data.data.status == 0)
                {
                    console.log("RES STATUS",typeof res.data.data.status);
                //return;
                toastr.info("User Inactive, You won't be able to login since user inactive!");
                    // Swal.fire({
                    //     title: "User Inactive",
                    //     text: "You won't be able to login since user inactive!",
                    //     //icon: "error",
                    //     showCancelButton: false,
                    //     confirmButtonColor: "#3085d6",
                    //     cancelButtonColor: "#d33",
                    //     confirmButtonText: "Ok",
                    // }).then(async (result) => {
                    //     return;
                    // });
                    
                }else{
                    this.$store.dispatch('resetUserState');
                    this.$store.dispatch('addUserTokenToState', res.data.data.token);
                    this.$store.dispatch('addUserRoleToState', res.data.data.role);
                    this.$store.dispatch('updateUserStatus', 'true');
                    this.$store.dispatch('addUserToState', model.email);
                    
                    this.$router.push({ path: 'dashboard' }).then(() => { this.$router.go() })
                }
                
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
<style lang="">
    
</style>