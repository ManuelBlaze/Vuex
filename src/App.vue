<template>
  <base-container title="Vuex">
    <the-counter />
    <favorite-value />
    <button @click="addOne">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
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
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
