<template lang="">
    <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Add User</h3>
        </div>

        <form method="POST" @submit.prevent="submitForm" action="">
            <div class="card-body">
                <div class="form-group">
                    <label for="fname" class="form-label">First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="fname"
                        v-model="model.fname"
                        placeholder="First Name"
                    />

                    <span
                        v-if="model.fname == '' && v$.model.fname.$error"
                        class="text-danger text-left"
                        >Enter First Name</span
                    >
                </div>
                <div class="form-group">
                    <label for="lname" class="form-label">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="lname"
                        v-model="model.lname"
                        placeholder="Last Name"
                    />

                    <span
                        v-if="model.lname == '' && v$.model.lname.$error"
                        class="text-danger text-left"
                        >Enter Last Name</span
                    >
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="model.email"
                        placeholder="Email address"
                    />

                    <span
                        v-if="model.email == '' && v$.model.email.$error"
                        class="text-danger text-left"
                        >Enter Email</span
                    >
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        name="password"
                        v-model="model.password.password"
                        placeholder="Password"
                    />

                    <span
                        v-if="
                            model.password.password == '' &&
                            v$.model.password.password.$error
                        "
                        class="text-danger text-left"
                        >Enter Password</span
                    >
                </div>

                <div class="form-group">
                    <label for="cpassword" class="form-label"
                        >Confirm Password</label
                    >
                    <input
                        type="password"
                        class="form-control"
                        name="cpassword"
                        v-model="model.password.confirm"
                        placeholder="Confirm Password"
                    />

                    <span
                        v-if="
                            model.password.confirm == '' &&
                            v$.model.password.confirm.$error
                        "
                        class="text-danger text-left"
                        >Enter Confirm Password</span
                    >
                    <span
                        v-if="
                            model.password.confirm &&
                            v$.model.password.confirm.$error
                        "
                        class="text-danger text-left"
                        >Password and Confirm Password should be same</span
                    >
                </div>
                <div class="form-group">
                    <label for="ustatus" class="form-label">User Status</label
                    >&nbsp;&nbsp;&nbsp;
                    <input
                        type="checkbox"
                        name="ustatus"
                        v-model="model.status"
                        checked
                        data-toggle="toggle"
                        data-size="sm"
                    />

                    <span class="text-danger text-left"></span>
                </div>
            </div>
            <div class="card-footer">
                <button
                    type="submit"
                    class="btn btn-primary"
                    style="
                        background-color: #007bff !important;
                        border-color: #007bff;
                    "
                >
                    Save user</button
                >&nbsp;&nbsp;
                <button
                    type="button"
                    class="btn btn-primary"
                    style="
                        background-color: #007bff !important;
                        border-color: #007bff;
                    "
                    @click="cancelForm"
                    
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "../config/axios";
import toastr from "toastr";
import { useVuelidate } from "@vuelidate/core";
import {
    required,
    email,
    minLength,
    sameAs,
    helpers, // include helper functions from Vuelidate
} from "@vuelidate/validators";

export default {
    name: "UserForm",
    data: (vm) => ({
        v$: useVuelidate(),
        model: {
            id: "",
            fname: "",
            lname: "",
            email: "",
            status: "",
            password: {
                password: "",
                confirm: "",
            },
        },
        user: {},
    }),
    validations() {
        return {
            model: {
                fname: {
                    required,
                },
                lname: {
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
            },
        };
    },

    mounted() {
        console.log(typeof this.$route.params.id);
        if (
            typeof this.$route.params.id == "string" &&
            !isNaN(this.$route.params.id)
        ) {
            console.log(this.$route.params.id);
            this.getUser(this.$route.params.id);
        }
    },
    methods: {
        submitForm() {
            this.v$.model.$validate(); // checks all inputs

            if (!this.v$.model.$error) {
                // if ANY fail validation
                if (
                    typeof this.$route.params.id == "string" &&
                    !isNaN(this.$route.params.id)
                ) {
                    this.updateUser();
                } else {
                    this.createUser();
                }
            } else {
                return false;
            }
        },
        cancelForm() {
            this.$router.push({ path: "/webadmin/users/" });
        },
        async updateUser() {
            try {
                console.log(this.model);
                let res = await axios.post("/api/users/update", this.model);
                toastr.success("User updated Successfully");
                //this.getPost(this.$route.params.id);
                this.$router.push({ path: "/webadmin/users" });
            } catch (error) {
                let errors = error.response.data.errors;
                for (let key in errors) {
                    toastr.error(errors[key]);
                }
            }
        },
        async getUser(id) {
            let res = await axios.get(`/api/users/get/${id}`);
            console.log("DATA", res.data.data);
            this.model.id = res.data.data.id;
            this.model.fname = res.data.data.firstname;
            this.model.lname = res.data.data.lastname;
            this.model.email = res.data.data.email;
        },
        async createUser() {
            try {
                let res = await axios.post("/api/users/save", this.model);
                toastr.success("User saved Successfully");
                this.model = {};
                this.$router.push({ path: "/webadmin/users" });
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
