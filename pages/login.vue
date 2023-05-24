<template>
  <div>
    <h1>Login</h1>

    <form @submit="submit">
      <label for="field-emal">Email</label>
      <input v-model="email" id="field-emal" />
      <button type="submit">Sign In</button>
      <div>{{error}}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
    };
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      await this.$api("auth", "Login", {
        email: this.email,
      })
        .then((data) => {
          console.log("data", data);
        })
        .catch(({ response }) => {
          
          if (response.status === 400) {
            this.error = "Bad credentials";
          }

        });
    },
  },
};
</script>

<style scoped></style>

