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
    <v-row justify="end">
      <v-col cols="8" class="d-flex justify-center">
        <v-img
          src="@/assets/images/lolboost.png"
          width="600"
          height="250"
        ></v-img>
      </v-col>
      <v-col cols="2" class="pa-2">
        <v-row justify="center">
          <v-col cols="8">
            <a href="https://discord.gg/4STTsZGz" class="discord">
              <img src="@/assets/images/discord.png" class="size" alt="" />
            </a>
          </v-col>
          <v-col cols="12">
            <div class="text-item">Buy Via Discord</div>
          </v-col>
          <v-col cols="12" class="ma-2 d-flex justify-center">
              <v-btn color="primary">Purchase</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="recent-price-container">
          <span class="price">
            {{ calculateLeagueAndPrice.lastPrice }}
          </span>
          <span class="price currency"> €</span>
        </div>
        <div class="ex-price-container">
          <span class="price">
            {{ calculateLeagueAndPrice.lastPrice }}
          </span>
          <span class="price currency"> €</span>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import League from "./BoostType/League.vue";
import Server from "./BoostType/Server.vue";
import PriceAndPurchase from "./BoostType/PriceAndPurchase.vue";
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
        this.lastCalculation.price = `${this.desire.division.price}-${this.current.division.price}`;
        this.lastCalculation.lastPrice =
          this.desire.division.price - this.current.division.price;
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
}
</style>
