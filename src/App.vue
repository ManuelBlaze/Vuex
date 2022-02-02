<template>
  <base-container title="Vuex">
    <the-counter />
    <favorite-value />
    <button @click="addOne">Add 1</button>
    <button @click="increase(10)">Add 10</button>
  </base-container>
</template>

<script>
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
    addOne() {
      this.$store.dispatch('addOne');
    },
    increase(value) {
      // this.$store.commit('increase', { value });
      this.$store.commit({ type: 'increase', value });
    },
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
