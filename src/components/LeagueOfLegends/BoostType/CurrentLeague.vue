<template>
  <v-row class="current-league-container">
    <v-col cols="6" class="league-options">
      <v-select
        full-width
        color="#9C27B0"
        :items="option.leagueOptions"
        label="League"
        return-object
        v-model="league"
        item-text="title"
      ></v-select>
      <v-select
        :disabled="!league ? true : false"
        full-width
        color="#9C27B0"
        :items="getDivision"
        label="League"
        return-object
        v-model="division"
        item-text="title"
        @change="sendCurrentPrice()"
      ></v-select>
    </v-col>
    <v-col cols="5">
      <img
        class="league"
        :src="require(`@/assets/images/${imgBasePath}/${division.imgUrl}.png`)"
        alt=""
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CurrentLeague",
  props: {
    option: Object,
    imgBasePath: String,
  },
  data() {
    return {
      league: null,
      division: null,
      selectedOption: null,
    };
  },
  watch: {
    option(newVal, oldVal) {
      this.changeDivisionOption();
    },
    league(newVal) {
      this.changeDivisionOption();
    },
  },
  methods: {
    findDivision(league) {
      return this.option.divisionOptions.find((el) => el.league == league)
        .divisions;
    },
    sendCurrentPrice() {
      this.$emit("sendCurrent", this.division.price);
    },
    changeDivisionOption() {
      this.division = this.findDivision(this.league)[0];
      this.sendCurrentPrice();
    },
  },
  mounted() {},
  created() {
    this.league = "Silver";
    this.changeDivisionOption();
  },
  computed: {
    ...mapGetters({}),
    getDivision() {
      return !this.league ? [] : this.findDivision(this.league);
    },
  },
};
</script>

<style lang="scss" scoped>
.current-league-container {
  display: flex;
  justify-content: space-between;

  .league-options {
    // width: 190px;
    // height: 280px;
  }
  .league-img {
    width: 200px !important;
    height: 250px !important;
    margin-left: 1rem;
    .league {
      width: 200px !important;
      height: 200px !important;
    }
  }
}
</style>
