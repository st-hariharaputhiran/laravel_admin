import App from "./Pages/App.vue";
import PostsList from "./Pages/posts.vue";
import PostForm from "./Pages/postform.vue";
import Register from "./Pages/auth/Register.vue";
import Login from "./Pages/auth/Login.vue";
import Dashboard from "./Pages/Dashboard.vue";
import Logout from "./Pages/logout.vue";
import UserForm from "./Pages/users/userform.vue";
import UsersList from "./Pages/users/users.vue";
import ExampleForm from "./Pages/components/ExampleForm.vue";

const routes = [
    {
        path: "/webadmin",
        name: "app",
        component: App,
    },
    {
        path: "/webadmin/register",
        name: "Register",
        components: {
            authpage: Register,
        },
    },
    {
        path: "/webadmin/dashboard",
        //name: "Dashboard",
        components: {
            default: Dashboard,
        },
        children: [
            {
                path: "/webadmin/posts",
                name: "PostsList",
                component: PostsList
            },
            {
                path: "/exampleform",
                component: ExampleForm,
            },
            {
                path: "/webadmin/post/create",
                name: "CreatePost",
                component: PostForm,
            },
            {
                path: "/webadmin/post/edit/:id",
                name: "EditPost",
                component: PostForm,
            },
            {
                path: "/webadmin/users",
                name: "UsersList",
                component: UsersList
            },
            {
                path: "/webadmin/user/create",
                name: "CreateUser",
                component: UserForm,
            },
            {
                path: "/webadmin/user/edit/:id",
                name: "EditUser",
                component: UserForm,
            },
        ],
    },
    {
        path: "/webadmin/login",
        name: "Login",
        components: {
            authpage: Login,
        },
    },
    {
        path: "/webadmin/logout",
        name: "Logout",
        component: Logout,
    },
];

export default routes;
