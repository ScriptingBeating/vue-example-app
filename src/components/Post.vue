<template>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="lead">
          {{ post.title }}
        </p>
        <p>{{ post.body }}</p>
        <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'Post',
    props: {
        post: {
            type: Object
        }
    },
    methods: {
      ...mapActions(['deletePost'])
    }
}
</script>
