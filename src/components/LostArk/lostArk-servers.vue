<template>
  <v-col cols="5">
    <p class="lostark-title">
      LOST ARK ALL SERVER <span class="gold">GOLD</span> SALE
    </p>

    <label class="label-text" for="serverLocation">Server Location</label>
    <v-select
      class="select-area"
      outlined
      :items="getServerLocations"
      v-model="selectedServerLocation"
      item-text="label"
    ></v-select>

    <label class="label-text" for="serverName">Server Name</label>
    <v-select
      class="select-area"
      :items="getServerInfo"
      return-object
      outlined
      item-text="name"
      v-model="selectedServer"
      @change="changedServer()"
    ></v-select>

    <label class="label-text" for="serverName">Piece (1000g)</label>
    <v-text-field
      min="10"
      class="select-area"
      v-model="quantity"
      outlined
      @change="changedQuantity()"
    ></v-text-field>

    <label class="label-text" for="serverName">Item Information</label>
    <v-textarea rows="3" class="select-area" v-model="information" outlined>
    </v-textarea>

    <v-row justify="space-between" class="px-3 mt-3">
      <span class="price-text"
        >Price
        {{ totalAmount }}
        €
      </span>

      <v-btn
        dark
        color="#3155A3"
        @click="routeToBuyMethod(getDataOfPurchase)"
        :disabled="checkDatas"
        >Buy Now</v-btn
      >
    </v-row>
  </v-col>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    selectedServer: null,
    quantity: null,
    information: null,
    totalAmount: 0.0,
    selectedServerLocation: "all",
  }),
  computed: {
    ...mapGetters(["getServerLocations"]),
    getServerInfo() {
      return this.$store.getters.getServerInfo(this.selectedServerLocation);
    },
    checkDatas() {
      let items = {
        quantity: this.quantity,
        selectedServer: this.selectedServer,
        totalAmount: this.totalAmount,
        selectedServerLocation: this.selectedServerLocation,
      };
      for (let item in items) {
        if (!items[item]) return true;
      }
      return false;
    },
    getDataOfPurchase() {
      let items = {
        quantity: this.quantity,
        selectedServer: this.selectedServer,
        information: this.information,
        price: this.totalAmount,
        selectedServerLocation: this.selectedServerLocation,
        panel: 1,
      };
      return items;
    },
  },
  methods: {
    ...mapActions(["routeToBuyMethod"]),
    changedServer() {
      if (this.quantity == null) {
        this.quantity = 1;
      }
      this.calculateTotalAmount();
    },
    changedQuantity() {
      this.calculateTotalAmount();
    },
    calculateTotalAmount() {
      this.totalAmount = this.selectedServer.price * this.quantity;
    },
  },
};
</script>

<style lang="scss">
$text-color: #2d2d2d;
$gold-color: #fed500;

@function toRem($value) {
  $remValue: ($value / 16) + rem;
  @return $remValue;
}

.v-text-field input {
  margin: 0 !important;
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: toRem(40) !important;
}

.v-text-field__details {
  display: none !important;
}

.textarea {
  margin: 0 0 5px 0 !important;
}

.lostark-title {
  color: $text-color;
  font-weight: 500;
  text-shadow: 2px 2px #00000040;

  & .gold {
    color: $gold-color;
  }
}

.price-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-shadow: 2px 2px #00000040;
  color: #2b2b2b;
}

.label-text {
  font-weight: 600;
  font-size: 16px;
  line-height: 19.36px;
  color: #5e5e5e;
}

.select-area {
  border-radius: 8px;
}
</style>
