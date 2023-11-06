<template lang="">
    <li class="nav-item">
        <a
            href=""
            class="nav-link "
        >
            <i class="nav-icon fas fa-home"></i>
            <p>Posts</p>
        </a>
    </li>
    <router-link :to="{ name: 'posts' }" class="text-uppercase"
        >posts</router-link
    >
</template>
<script>
export default {
    //name: "Menu",
};
</script>
<style lang=""></style>
