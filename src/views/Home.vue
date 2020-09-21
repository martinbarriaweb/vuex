<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="colorContador">{{titulo}}: {{contador}}</h1>
    <input v-model="number" type="number" />
    <BtnAccion :number="number" :state="true" />
    <BtnAccion :number="number" :state="false" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BtnAccion from "../components/BtnAccion";
export default {
  name: "Home",
  data() {
    return {
      titulo: "MI CONTADOR",
      number: Number,
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador > 100 ? { color: "blue" } : { color: "red" }];
    },
  },
  components: {
    BtnAccion,
  },
};
</script>
