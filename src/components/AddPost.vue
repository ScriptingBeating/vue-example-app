<template>
  <form @submit.prevent="submit" class="my-3">
      <label for="title">Post title</label>
      <input v-model="title" type="text" class="form-control" id="title" required>
      <label for="title">Post Body</label>
      <textarea v-model="description" class="form-control" id="body" cols="10" rows="3"></textarea>
      <button type="submit" class="btn btn-success mt-3">Add Post</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            title: '',
            description: '',
        }
    },
    methods: {
        ...mapActions(['addPost']),
        submit() {
            this.addPost({title: this.title, body: this.description});
            this.title = '';
            this.description = '';
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>

</style>