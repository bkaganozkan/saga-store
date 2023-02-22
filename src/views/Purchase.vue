<template>
  <div>
    <Header />

    <v-row class="container" justify="space-between">
      <v-col cols="7">
        <CartItem :item="item" v-for="(item, i) in cartItems" :key="i" />
      </v-col>
      <v-col cols="4">
        <v-col cols="12">
          <label for="">Email</label>
          <v-text-field label="Email"> </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Username</label>
          <v-text-field label="Username"> </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Telephone</label>
          <v-text-field label="Telephone"> </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Notes</label>
          <v-textarea label="Notes"> </v-textarea>
        </v-col>
        <v-col cols="12">
          <v-row justify="end">
            <v-btn @click="routeToBuyMethod(serverInfo)" color="primary"
              >Purchase With CC</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row justify="end">
            <v-btn small @click="routeToBuyMethod(serverInfo)" color="yellow"
              >Purchase with Crypto</v-btn
            >
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CartItem from "@/components/Shared/CartItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    CartItem,
  },
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
    }),
  },
};
</script>

<style>
.container {
  margin: 94px 1rem 1rem 1rem;
}
</style>
