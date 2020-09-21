<template>
  <button @click="accionBoton({state, number})">{{txtBtn}}</button>
  <button @click="verObj">Ver objeto</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    state: Boolean,
    number: Number,
  },
  computed: {
    txtBtn() {
      return this.state ? "Incrementar" : "Decrementar";
    },
  },
  methods: {
    ...mapActions(["accionBoton"]),
    verObj() {
      console.log(this.number);
    },
  },
};
</script>

<style>
</style>