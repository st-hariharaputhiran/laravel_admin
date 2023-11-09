import "./bootstrap";
import "admin-lte";

import { createApp } from "vue";
import {
    createRouter,
    createWebHistory,
} from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import store from './store';
import routes from "./routes";

import App from "./Pages/App.vue";
import "https://code.jquery.com/jquery-3.7.0.js";

import "https://cdn.jsdelivr.net/npm/vue@3.2.1/dist/vue.global.js";
//import "https://unpkg.com/vue3-easy-data-table";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import swal from 'sweetalert2';
window.Swal = swal;

let app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
    
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(router);
app.use(store);
app.mount("#app");
