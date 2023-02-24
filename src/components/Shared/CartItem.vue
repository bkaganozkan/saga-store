<template>
  <div class="cart-container">
    <v-row>
      <v-col cols="10">
        <div class="text-area">Server Name: {{ item.serverName }}</div>
        <div class="text-area">Amount: {{ item.amount }}</div>
        <div class="text-area">Price: {{ item.price }}{{ item.currency }}</div>
      </v-col>
      <v-col cols="2" style="display: grid">
        <v-btn @click="removeCart(item)" color="red" class="remove-btn"
          >Remove</v-btn
        >
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mdiDelete, mdiTrashCanOutline } from "@mdi/js";
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      icons: {
        mdiDelete,
        mdiTrashCanOutline,
      },
    };
  },

  methods: {
    ...mapMutations(["removeCart"]),
  },
};
</script>

<style scoped>
.cart-container {
  border: 1px solid #cacaca;
  margin: 0.25rem;
  padding: 1rem;
  border-radius: 10px;
}
.text-area {
  font-size: 18px;
  font-weight: 500;
}
.remove-btn {
  align-self: center;
  justify-self: center;
  color: white;
}
</style>
