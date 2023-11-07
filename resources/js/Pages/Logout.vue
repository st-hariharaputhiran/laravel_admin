<template lang="">
    <div></div>
</template>
<script>
export default {
    methods: {
        logoutUser() {
            this.$store.dispatch("addUserTokenToState", null);
            this.$store.dispatch("updateUserStatus", "false");
            this.$store.dispatch("addUserToState", null);
            this.$router.push({ path: "login" });
        },
    },
    mounted() {
        this.logoutUser();
    },
};
</script>
<style lang=""></style>
