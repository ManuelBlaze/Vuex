<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter />
    <favorite-value />
    <button @click="addOne">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>

  <base-container :title="'User Authentication'">
    <user-auth />
  </base-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions(['addOne']),
    ...mapMutations(['increase']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: JetBrains Mono;
}

body {
  margin: 0;
}
button {
  background-color: #34495e;
  border-color: #34495e;
  color: white;
  font-family: JetBrains Mono;
  cursor: pointer;
  margin: 0 10px;
}
</style>
