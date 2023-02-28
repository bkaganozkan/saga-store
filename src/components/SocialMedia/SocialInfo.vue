<template>
  <v-col cols="7" class="info-container">
    <v-row justify="center" style="height: 100%" class="d-flex align-center">
      <v-col cols="7">
        <label class="label-text" for="platform">Platform</label>
        <v-select
          style="brder-radius: 8px"
          outlined
          placeholder="Platform"
          :items="platforms"
          v-model="selectedPlatform"
        ></v-select>
        <label class="label-text" for="methods">Methods</label>
        <v-select
          style="brder-radius: 8px"
          outlined
          placeholder="Methods"
          return-object
          item-text="title"
          v-model="method"
          :items="
            selectedPlatform ? socialOption(selectedPlatform).methods : []
          "
        ></v-select>
        <label class="label-text" for="amount">Amount</label>
        <v-text-field
          style="boder-radius: 8px"
          outlined
          placeholder="Amount"
          v-model="totalAmount"
        ></v-text-field>
        <label class="label-text" for="link">Link</label>
        <v-text-field
          v-model="link"
          style="boder-radius: 8px"
          outlined
          placeholder="Link"
        ></v-text-field>
        <template v-if="method && method.comment">
          <label class="label-text" for="link"
            >Comments (A Comment for each line)</label
          >
          <v-textarea
            style="boder-radius: 8px"
            outlined
            dense
            no-resize
            v-model="comment"
            placeholder="Comments"
          ></v-textarea>
        </template>
        <v-row justify="space-between" class="px-4">
          <v-col cols="8" class="px-0">
            <span class="price-text"
              >Price
              {{
                method && method.price
                  ? getTotalPrice(method.price, totalAmount)
                  : 0
              }}
              €
            </span>
          </v-col>
          <v-col cols="4" class="px-0">
            <v-btn
              @click="routeToBuyMethod(getData)"
              dark
              color="#3155A3"
              :disabled="checkData"
              >Purchase</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SocialInfo",
  data() {
    return {
      selectedPlatform: null,
      method: null,
      totalAmount: 1,
      link: "",
      comment: "",
    };
  },

  watch: {
    selectedPlatform() {
      this.method = null;
    },
  },

  methods: {
    ...mapActions(["routeToBuyMethod"]),
  },

  computed: {
    ...mapGetters({
      socialOption: "getSocialOptions",
      platforms: "selectSocialPlatform",
      getTotalPrice: "calculateSocialPrice",
    }),
    getData() {
      return {
        selectedPlatform: this.selectedPlatform,
        method: this.method,
        totalAmount: this.totalAmount,
        link: this.link,
        comment: this.comment,
        price: this.getTotalPrice(this.method.price, this.totalAmount),
        panel: 3,
      };
    },
    checkData() {
      let items = {
        selectedPlatform: this.selectedPlatform,
        method: this.method,
        totalAmount: this.totalAmount,
        link: this.link,
      };
      for (let item in items) {
        if (!items[item]) return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  background: #f8f8f8;
  width: 100% !important;
  border-radius: 41px;
}
.v-input__slot {
  border-radius: 38px !important;
}
.label-text {
  font-weight: 600;
  font-size: 16px;
  line-height: 19.36px;
  color: #5e5e5e;
}

.price-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #2b2b2b;
}
</style>
