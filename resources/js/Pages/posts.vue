<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <router-link to="/createpost" class="btn btn-secondary"
                    >Create</router-link
                >
            </div>
        </div>
        <div class="card-body">
            <!-- <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, key) in posts" :key="post.id">
                        <td>{{ key }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                        <td>
                            <router-link
                                :to="{
                                    name: 'EditPost',
                                    params: { id: post.id },
                                }"
                                class="btn btn-info"
                                >Edit</router-link
                            >
                            <button
                                type="button"
                                class="btn btn-danger ms-2"
                                v-on:click="deletePost(post.id)"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table> -->
            <!-- <table id="example" class="display nowrap" style="width: 100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </table> -->

            <easy-data-table
                :headers="headers"
                :items="items"
            />
        </div>
    </div>
</template>

<script>
import axios from "./config/axios";
import toastr from "toastr";
//import { Header, Item } from "vue3-easy-data-table";
//import EasyDataTable from 'vue3-easy-data-table'
//import Vue3EasyDataTable from 'vue3-easy-data-table';
//import 'vue3-easy-data-table/dist/style.css';

export default {
    name: "PostsList",
    components: {
      EasyDataTable: window['vue3-easy-data-table'],
      //EasyDataTable: window[Vue3EasyDataTable],
    },
    data () {
      return {
        // headers: [
        //   { text: "ID", value: "id" },
        //   { text: "TITLE", value: "title"},
        //   { text: "DESCRIPTION", value: "description"},
        //   { text: "EDIT", value: "position"},
        //   { text: "DELETE", value: "indicator.height"},
        // ],
        //items: [],
        headers: [
          { text: "PLAYER", value: "player" },
          { text: "TEAM", value: "team"},
          { text: "NUMBER", value: "number"},
          { text: "POSITION", value: "position"},
          { text: "HEIGHT", value: "indicator.height"},
          { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
          { text: "LAST ATTENDED", value: "lastAttended", width: 200},
          { text: "COUNTRY", value: "country"},
        ],
        items: [
          { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
          { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
          { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
          { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
        ],
      }
    },

    mounted() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            let res = await axios.get("/api/posts");
            console.log(res.data);
            //const resdata = Array.isArray(res.data.data) ? res.data.data.slice() : [];
            //this.items = res.data.data;
            console.log(res.data.data);
            
            console.log(this.items);
        },
        async deletePost(id) {
            let res = await axios.get(`/api/posts/delete/${id}`);
            toastr.success(res.data.message);
            this.getPosts();
        },
    },
};
</script>
