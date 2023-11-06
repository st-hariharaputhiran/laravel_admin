import App from "./Pages/App.vue";
import PostsList from "./Pages/posts.vue";
import CreatePost from "./Pages/createpost.vue";
import EditPost from "./Pages/editpost.vue";
import Register from "./Pages/auth/Register.vue";
import Login from "./Pages/auth/Login.vue";

 const routes = [
    {
        path: "/",
        name: "app",
        component: App,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
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

export default routes;