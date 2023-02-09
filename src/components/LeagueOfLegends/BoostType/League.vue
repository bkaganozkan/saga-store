<template>
  <v-row>
    <v-col cols="6">
      <v-select
        :items="option.league"
        v-model="league"
        placeholder="League Option" 
        solo       
      ></v-select>
      <v-select
        :disabled="!league ? true : false"
        full-width
        color="#9C27B0"
        :items="getDivision"
        label="Division"
        return-object
        v-model="division"
        item-text="title"
        @change="
          leagueType == 'current'
            ? sendCurrentLeagueData()
            : sendDesireLeagueData()
        "
      ></v-select>
    </v-col>
    <v-col cols="5">
      <img
        :src="
          require(`@/assets/images/${option.imgBasePath}/${division.imgUrl}.png`)
        "
        alt=""
      />
    </v-col>
  </v-row>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    option: Object,
    leagueType: String,
  },
  data() {
    return {
      league: null,
      division: null,
    };
  },
  watch: {
    option(val) {
      this.changeDivisionOption();
    },
  },
  methods: {
    findDivision(league) {
      return this.option.divisions.find((el) => el.league == league).divisions;
    },
    changeDivisionOption() {
      this.division = this.findDivision(this.league)[0];
    },
    sendCurrentLeagueData() {
      this.$emit("sendCurrent", {
        league: this.league,
        division: this.division,
      });
    },
    sendDesireLeagueData() {
      this.$emit("sendDesire", {
        league: this.league,
        division: this.division,
      });
    },
  },

  created() {
    this.league = "Silver";
    this.changeDivisionOption();
    this.sendCurrentLeagueData();
    this.sendDesireLeagueData();
  },
  computed: {
    getDivision() {
      return !this.league ? [] : this.findDivision(this.league);
    },
  },
};
</script>

<style></style>
