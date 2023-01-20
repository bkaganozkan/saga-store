<template>
  <v-row class="container">
    <v-col
      cols="12"
      md="4"
      v-for="(option, index) in boostOptions(boostType.tabName)"
      :key="index"
      :class="[option.title === 'Server' ? 'server' : 'league']"
    >
      <h4>{{ option.title }}</h4>

      <CurrentLeague
        :option="option"
        :imgBasePath="boostType.imgBasePath"
        v-if="option.title === 'Current League'"
        @sendCurrent="getCurrentRate"
      />
      <DesiredLeague
        :imgBasePath="boostType.imgBasePath"
        @sendDesire="getDesireRate"
        :option="option"
        v-if="option.title === 'Desire League'"
      />
      <Server :option="option" v-if="option.title === 'Server'" />
    </v-col>
    <PriceAndComments
      :price="calculatePrice(desireRate, currentRate, boostType.tabName)"
    />
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import PriceAndComments from "./priceAndCommnets.vue";
import CurrentLeague from "./BoostType/CurrentLeague.vue";
import DesiredLeague from "./BoostType/DesiredLeague.vue";
import Server from "./BoostType/Server.vue";
export default {
  name: "BoostType",
  props: {
    boostType: Object,
  },
  components: {
    PriceAndComments,
    CurrentLeague,
    DesiredLeague,
    Server,
  },
  data() {
    return {
      selection: {},
      desireRate: null,
      currentRate: null,
    };
  },

  mounted() {},

  methods: {
    selectType(value) {},
    getDesireRate(value) {
      this.desireRate = value;
    },
    getCurrentRate(value) {
      this.currentRate = value;
    },
  },

  computed: {
    ...mapGetters({
      boostOptions: "getBoostOptionsByName",
      calculatePrice: "calculatePrice",
    }),

    currentTotalRate() {
      if (this.desireRate && this.currentRate) {
        return this.desireRate - this.currentRate;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.boost-type-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  padding: 0.75em;
}

.options-container {
  margin-top: 2.75rem;
  display: flex;
  justify-content: space-between;

  .option-container {
    width: 35%;
    display: flex;
    align-content: space-between;

    &.server {
      justify-content: end;
      width: 20%;
    }

    &.league {
      justify-content: space-between;
    }
    .option {
      margin-right: 0.25rem;
    }
    .option-image {
      width: 30%;
      padding-top: 1rem;

      .image {
        width: 150px !important;
        height: 150px !important;
      }
    }
  }
}

.boost-type {
  width: 100px;
  height: 100px;
  background: rgba($color: #e43ce4, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
