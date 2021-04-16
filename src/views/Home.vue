<template>
  <div class="row justify-content-center">
    <Card width="50">
      <div class="row justify-content-between">
        <h1 class="card-title text-center">Dashboard</h1>
        <div>
          <router-link :to="{ name: 'create-post' }" class="btn btn-primary">Create Post</router-link>
        </div>
      </div>
      <Posts />
    </Card>
  </div>
</template>

<script>
import Posts from "../components/Posts";
import Card from "../components/Card";
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "Home",
  components: {
    Posts,
    Card,
  },
  computed: mapGetters(["postsLoaded"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    if (!this.postsLoaded) {
      await this.fetchPosts();
    }
  },
};
</script>

<style></style>
