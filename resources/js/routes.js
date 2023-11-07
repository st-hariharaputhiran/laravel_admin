import App from "./Pages/App.vue";
import PostsList from "./Pages/posts.vue";
import CreatePost from "./Pages/createpost.vue";
import EditPost from "./Pages/editpost.vue";
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
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: "/posts",
                name: "PostsList",
                component: PostsList,
            },
            {
                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                path: "/exampleform",
                component: ExampleForm,
            },
            {
                path: "/createpost",
                name: "CreatePost",
                component: CreatePost,
            },
            {
                path: "/editpost",
                name: "EditPost",
                component: EditPost,
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
