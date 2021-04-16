<template>
  <div class="d-flex justify-content-center">
    <Card>
      <h5 class="card-title text-center">Login</h5>
      <form action="" @submit.prevent="submit">
        <label for="email">Email Address: </label>
        <input v-model="email" class="form-control" type="email" id="email" />
        <button type="submit" class="mt-2 btn btn-primary">Submit</button>
      </form>
    </Card>
  </div>
</template>

<script>
import Card from "./Card";
import { mapActions } from 'vuex';
export default {
  name: "LoginForm",
  components: {
    Card
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      const email = this.email;
      if (!email) {
        alert('Email is required');
        return;
      }
      try {
        this.login(email);
        this.$router.push({ name: 'home' });
      } catch(e) {
        alert(e.message);
      }
    }
  }
};
</script>

<style scoped></style>
