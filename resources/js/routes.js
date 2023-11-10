import App from "./Pages/App.vue";
import PostsList from "./Pages/posts.vue";
import PostForm from "./Pages/postform.vue";
import Register from "./Pages/auth/Register.vue";
import Login from "./Pages/auth/Login.vue";
import Dashboard from "./Pages/Dashboard.vue";
import Logout from "./Pages/logout.vue";
import ExampleForm from "./Pages/components/ExampleForm.vue";

const routes = [
    {
        path: "/",
        name: "app",
        component: App,
    },
    {
        path: "/register",
        name: "Register",
        components: {
            authpage: Register,
        },
    },
    {
        path: "/dashboard",
        //name: "Dashboard",
        components: {
            default: Dashboard,
        },
        children: [
            {
                path: "/posts",
                name: "PostsList",
                component: PostsList
            },
            {
                path: "/exampleform",
                component: ExampleForm,
            },
            {
                path: "/post/create",
                name: "CreatePost",
                component: PostForm,
            },
            {
                path: "/post/edit/:id",
                name: "EditPost",
                component: PostForm,
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        components: {
            authpage: Login,
        },
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
    },
];

export default routes;
