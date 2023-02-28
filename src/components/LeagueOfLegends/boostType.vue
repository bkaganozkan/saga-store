<template>
  <v-row style="width: 60vw">
    <v-col cols="4">
      <League
        :option="boostType"
        leagueType="current"
        @sendCurrent="getCurrent"
      />
    </v-col>
    <v-col cols="4">
      <League :option="boostType" leagueType="desire" @sendDesire="getDesire" />
    </v-col>
    <v-col cols="4">
      <Server :servers="boostType.servers" @sendServerInfo="getServerInfo" />
    </v-col>
    <v-row>
      <v-col cols="6" class="d-flex justify-center pl-7">
        <v-img
          src="@/assets/images/lolboost.png"
          width="350"
          height="350"
          cover
        ></v-img>
      </v-col>

      <template v-if="calculateLeagueAndPrice.price > 0">
        <v-col cols="2">
          <v-col cols="12" class="recent-price-container">
            <span class="price">
              {{ calculateLeagueAndPrice.price }}
            </span>
            <span class="price currency"> €</span>
          </v-col>
          <v-col cols="12" class="ex-price-container">
            <span class="price">
              {{
                calculateLeagueAndPrice.price +
                (calculateLeagueAndPrice.price / 100) * 25
              }}
            </span>
            <span class="price currency"> €</span>
          </v-col>
        </v-col>

        <v-col cols="4" class="pa-2" style="display: grid">
          <v-row justify="center" class="buy-container">
            <v-col cols="6" style="text-align: center">
              <a href="https://discord.gg/4STTsZGz" class="discord">
                <img src="@/assets/images/discord.png" class="size" alt="" />
              </a>
            </v-col>
            <v-col cols="12">
              <div class="text-item">Buy Via Discord</div>
            </v-col>
            <v-col cols="12" class="ma-2 d-flex justify-center">
              <v-btn @click="routeToBuyMethod(lastCalculation)" color="primary"
                >Purchase</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </template>
      <template>
        <div class="not-allowed-container">
          <div class="text-container">
            <span class="text"> This Not Allowed </span>
          </div>
        </div>
      </template>
    </v-row>
  </v-row>
</template>

<script>
import League from "./BoostType/League.vue";
import Server from "./BoostType/Server.vue";
import PriceAndPurchase from "./BoostType/PriceAndPurchase.vue";
import { mapActions } from "vuex";
export default {
  components: {
    League,
    Server,
    PriceAndPurchase,
  },
  props: {
    boostType: Object,
  },
  data() {
    return {
      current: null,
      desire: null,
      server: null,
      lastCalculation: {},
    };
  },
  watch: {
    boostType(val) {
      console.log(val);
    },
  },

  methods: {
    ...mapActions(["routeToBuyMethod"]),
    getCurrent(current) {
      this.current = current;
    },
    getDesire(desire) {
      this.desire = desire;
    },
    getServerInfo(server) {
      this.server = server;
    },
  },
  computed: {
    calculateLeagueAndPrice() {
      if (this.current && this.desire) {
        this.lastCalculation.league = `${this.current.league}-${this.desire.league}`;
        this.lastCalculation.division = `${this.current.division.title}-${this.desire.division.title}`;
        this.lastCalculation.server = `${this.server}`;
        this.lastCalculation.priceText = `${this.desire.division.price}-${this.current.division.price}`;
        this.lastCalculation.price =
          this.desire.division.price - this.current.division.price;
        this.lastCalculation.panel = 4;
      }
      return this.lastCalculation;
    },
  },
};
</script>

<style lang="scss" scoped>
.ex-price-container {
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 300;
  line-height: 100%;
  color: #000;
  padding: 0;
  margin: 0 0 5px;
  white-space: nowrap;
  text-align: end;
  .currency {
    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      width: calc(100% + 100px);
      height: 4px;
      padding: 0;
      margin: 0;
      background: rgb(255, 0, 76);
      position: relative;
      left: -65px;
      top: -20px;
      border-radius: 2px;
      transform: rotate(-15deg);
      opacity: 0.8;
    }
  }
}
.recent-price-container {
  box-sizing: border-box;
  font-size: 60px;
  font-weight: 300;
  line-height: 100%;
  color: #000;
  padding: 0;
  margin: 0 0 5px;
  white-space: nowrap;
  text-align: end;
  .price {
    display: inline;
    font-weight: 300;
    color: #000;
    text-align: left;
  }
  .currency {
    margin-left: 0.25rem;
  }
}
.discord {
  .size {
    width: 100px;
    height: 100px;
  }
  &:hover {
    filter: brightness(2px) !important;
    opacity: 0.7 !important;
  }
}
.text-item {
  font-size: 24px;
  font-weight: 500;
  color: #0f0f0f;
  text-align: center;
}
.buy-container {
  background: rgba(#02202f, 0.3);
  width: 300px;
  height: 250px;
  border-radius: 25%;
  justify-self: end;
}
.not-allowed-container {
  flex: 1 1;
  padding: 12px;
  display: grid;

  .text-container {
    display: grid;
    width: 75%;
    height: 50%;
    text-align: center;
    background: linear-gradient(
      119deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(121, 9, 102, 1) 27%,
      rgba(59, 27, 221, 1) 71%,
      rgba(0, 212, 255, 1) 100%
    );

    .text {
      color: #fff;
      align-self: center;
      justify-self: center;
      font-size: 24px;
      font-family: sans-serif;
      font-weight: 600;
    }
  }
}
</style>
