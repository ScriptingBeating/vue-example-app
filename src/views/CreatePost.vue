<template>
  <div class="row justify-content-center">
    <Card width="50">
      <h1 class="card-title text-center">Create Post</h1>
      <AddPost />
    </Card>
  </div>
</template>

<script>
import Card from "../components/Card";
import AddPost from "../components/AddPost";
export default {
  name: "CreatePost",
  components: {
    Card,
    AddPost,
  },
};
</script>
