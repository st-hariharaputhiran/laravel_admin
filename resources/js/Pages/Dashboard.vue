<template>
    <body
        v-if="$store.state.user.token"
        class="hold-transition sidebar-mini layout-fixed"
    >
        <div class="wrapper">
            <Preloader></Preloader>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div class="content-wrapper">
                <ContentHeader></ContentHeader>

                <section class="content">
                    <div class="container-fluid">
                        <router-view></router-view>
                        
                    </div>
                </section>
            </div>

            <Footer></Footer>
            <ControlSidebar></ControlSidebar>
        </div>
    </body>
</template>

<script>
import $ from "jquery";
//import "../node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css"
//import "../node_modules/admin-lte/plugins/select2/css/select2.min.css"

import Preloader from "./dashboard/Preloader.vue";
import ContentHeader from "./dashboard/ContentHeader.vue";
import ExampleForm from "./components/ExampleForm.vue";
import Navbar from "./dashboard/Navbar.vue";
import Sidebar from "./dashboard/Sidebar.vue";
import Footer from "./dashboard/Footer.vue";
import ControlSidebar from "./dashboard/ControlSidebar.vue";
import "select2";

export default {
    //name: "Dashboard",
    components: {
        Preloader,
        ContentHeader,
        ExampleForm,
        Navbar,
        Sidebar,
        Footer,
        ControlSidebar,
    },
    data() {
        return {
            user: this.$user,
        };
    },
    methods: {
        initializeSelect2() {
            //Initialize Select2 Elements
            $(".select2").select2;

            //Initialize Select2 Elements
            $(".select2bs4").select2;
        },
    },
    mounted() {
        this.initializeSelect2();
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
