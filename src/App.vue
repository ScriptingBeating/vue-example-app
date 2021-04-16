<template>
  <div class="row justify-content-center my-3">
    <button
    v-if="isLoggedIn"
    @click="logoutUser"
    class="btn btn-danger text-center"
  >
    Logout
  </button>
  </div>
  <router-view />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
