<template>
  <ul :key="post.id" v-for="post in allPosts">
    <Post :post="post" />
  </ul>
</template>

<script>
import Post from './Post';
import { mapGetters } from "vuex";
export default {
  name: "Posts",
  computed: mapGetters(["allPosts"]),
  components: {
      Post
  }
};
</script>

<style></style>
