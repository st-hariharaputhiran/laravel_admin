import "./bootstrap";
import "./bundle";
import "admin-lte";
import { createApp } from "vue";
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import PostsList from "./Pages/posts.vue";
import CreatePost from "./Pages/createpost.vue";
import EditPost from "./Pages/editpost.vue";
export const routes = [
    {
        path: "/",
        name: "app",
        component: App,
    },
    {
        path: "/posts",
        name: "PostsList",
        component: PostsList,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
    },
    {
        path: "/edit-post/:id",
        name: "EditPost",
        component: EditPost,
    },
];
import App from "./Pages/App.vue";
let app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
    

app.use(router);
app.mount("#app");
