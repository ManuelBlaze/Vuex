<template>
  <div>
    <button @click="login" v-if="!userIsAuthenticated">Login</button>
    <button @click="logout" v-else>Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
</style>
