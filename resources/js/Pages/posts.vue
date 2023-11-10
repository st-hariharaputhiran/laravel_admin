<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <router-link to="/post/create" class="btn btn-secondary"
                    >Create</router-link
                >
            </div>
        </div>
       
        <EasyDataTable :headers="headers" :items="items">
            <template #item-operation="item">
                <div class="operation-wrapper">
                    <img
                        src="./images/edit.png"
                        class="operation-icon"
                        @click="editItem(item)"
                    />
                    <img
                        src="./images/delete.png"
                        class="operation-icon"
                        @click="deleteItem(item)"
                    />
                </div>
            </template>
        </EasyDataTable>
    </div>
</template>

<script>
import axios from "./config/axios";
import toastr from "toastr";

export default {
    name: "PostsList",
    components: {
        //EasyDataTable: window['vue3-easy-data-table'],
        //EasyDataTable: window[Vue3EasyDataTable],
    },
    data() {
        return {
            headers: [
                { text: "ID", value: "id" },
                { text: "TITLE", value: "title" },
                { text: "DESCRIPTION", value: "description" },
                { text: "Operation", value: "operation" },
        ],            
        items: [],
        };
    },

    mounted() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            let res = await axios.get("/api/posts");
            console.log(res.data);
            //const resdata = Array.isArray(res.data.data) ? res.data.data.slice() : [];
            this.items = res.data.data;
            console.log(res.data.data);

            console.log(this.items);
        },
        async deletePost(id) {
            let res = await axios.get(`/api/posts/delete/${id}`);
            toastr.success(res.data.message);
            this.getPosts();
        },
        editItem(item) {
            this.$router.push({ path: "/post/edit/" + item.id });
        },
        async deleteItem(item) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios
                        .delete(`/api/posts/delete/${item.id}`)
                        .then((response) => {
                            Swal.fire({
                                icon: "success",
                                title: "Post deleted successfully!",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.getPosts();
                            //return response
                        })
                        .catch((error) => {
                            Swal.fire({
                                icon: "error",
                                title: "An Error Occured!",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            //return error
                        });
                }
            });
        },
    },
};
</script>

<style>
.operation-wrapper .operation-icon {
    width: 20px;
    cursor: pointer;
    float: left;
    padding-right: 4px;
}
</style>
