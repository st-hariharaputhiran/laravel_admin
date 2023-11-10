<template lang="">
    <div class="card">
        
        <div class="card-body">
            <form action="">
                <div class="form-group">
                    <label for="title">Title;</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        class="form-control"
                        v-model="post.title"
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description;</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        v-model="post.description"
                        class="form-control"
                    />
                </div>
                
                <button v-if="typeof this.$route.params.id == 'string' && !isNaN(this.$route.params.id)"
                    type="button"
                    class="btn btn-secondary mt-2"
                    v-on:click="updatePost()"
                    style="background-color: #007bff !important;border-color: #007bff;">
                    Update
                </button>
                <button v-else
                    type="button"
                    class="btn btn-secondary mt-2"
                    v-on:click="createPost()"
                    style="background-color: #007bff !important;border-color: #007bff;">
                    Create
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "./config/axios";
import toastr from "toastr";

export default {
    name: "PostForm",
    props: {
        postType: String,
    },
    data() {
        return {
            post: {}, // Initial state
        };
    },
    
    mounted() {
        console.log(typeof this.$route.params.id);
        if(typeof this.$route.params.id == "string" && !isNaN(this.$route.params.id))
        {
            console.log(this.$route.params.id);
            this.getPost(this.$route.params.id);
        }
        
    },
    methods: {
        async updatePost() {
            try {
                let res = await axios.post("/api/posts/update", this.post);
                toastr.success("Post updated Successfully");
                //this.getPost(this.$route.params.id);
                this.$router.push({ path: "/posts" });
            } catch (error) {
                let errors = error.response.data.errors;
                for (let key in errors) {
                    toastr.error(errors[key]);
                }
            }
        },
        async getPost(id) {
            let res = await axios.get(`/api/posts/get/${id}`);
            console.log(res.data);
            this.post = res.data.data;
        },
        async createPost() {
            try {
                let res = await axios.post("/api/posts/save", this.post);
                toastr.success("Post saved Successfully");
                this.post = {};
                this.$router.push({ path: "posts" });
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
<style lang="">
    
</style>