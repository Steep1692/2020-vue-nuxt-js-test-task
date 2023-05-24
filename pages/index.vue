<template>
  <div>
    <h1 class="title">NUXT as API Server</h1>
    <h2 class="subtitle">Users</h2>
    <button type="button" @click="$fetch">Refresh</button>
    <ul>
      <li
        :key="user.id"
        v-for="user in users"
        @click="getUserInfo(user.id)"
      >{{ user.first_name }}</li>
    </ul>
    <div v-if="userInfo">
      <hr>
      <h3>{{ userInfo.first_name }} {{ userInfo.last_name }}</h3>
      <div>Email: {{ userInfo.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['requiresAuth'],
  data() {
    return {
      users: [],
      userInfo: null,
    }
  },
  async fetch() {
    this.users = await this.$api("users", "Get")
  },
  methods: {
    async getUserInfo(id) {
      this.userInfo = await this.$api("users", "Get", {
        id: id
      })
    }
  }
}
</script>

<style scoped></style>

