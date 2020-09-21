<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="colorContador">{{titulo}}: {{contador}}</h1>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      titulo: "MI CONTADOR",
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 100 ? { color: "blue" } : { color: "red" }];
    },
  },
  methods: {
    ...mapMutations(["incrementar"]),
  },
};
</script>
