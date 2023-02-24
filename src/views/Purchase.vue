<template>
  <div>
    <Header />

    <v-row class="container" justify="space-between">
      <v-col cols="7">
        <CartItem :item="item" v-for="(item, i) in cartItems" :key="i" />
        <v-row justify="end" style="display: grid">
          <v-col cols="4" class="total-price">
            <span> {{ totalPrice }} € </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-col cols="12">
          <label for="">Email</label>
          <v-text-field label="Email" v-model="info.email"> </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Username</label>
          <v-text-field label="Username" v-model="info.username">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Telephone</label>
          <v-text-field label="Telephone" v-model="info.tel"> </v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="">Notes</label>
          <v-textarea label="Notes" v-model="info.notes"> </v-textarea>
        </v-col>
        <v-col cols="12" class="m-2">
          <v-row justify="end">
            <v-btn
              @click="
                routeToBuyMethodWithCart({
                  info: info,
                  cart: cartItems,
                  price: totalPrice,
                })
              "
              color="success"
              >Purchase With CC</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="12" class="m-2">
          <v-row justify="end">
            <v-btn @click="routeToBuyMethod(serverInfo)" color="orange"
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
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Header,
    CartItem,
  },
  data() {
    return {
      info: { email: "", username: "", tel: "", notes: "" },
    };
  },
  methods: {
    ...mapActions([
      "routeToBuyMethodWithCart",
      "routeToBuyMethodWithCartByCrypto",
    ]),
  },
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      totalPrice: "totalPrice",
    }),
  },
};
</script>

<style>
.container {
  margin: 94px 1rem 1rem 1rem;
}
.total-price {
  font-size: 24px;
  font-weight: 600;
  max-width: none;
  /* justify-self: center; */
}
</style>
