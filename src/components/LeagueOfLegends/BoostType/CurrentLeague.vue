<template>
  <div class="current-league-container">
    <div class="league-options">
      <v-select
        full-width
        color="#9C27B0"
        :items="option.leagueOptions"
        label="League"
        return-object
        v-model="league"
        item-text="title"
        @change="changeCurrent()"
      ></v-select>
      <v-select
        full-width
        color="#9C27B0"
        :items="option.divisionOptions"
        label="Division"
        return-object
        v-model="division"
        @change="changeCurrent()"
        item-text="title"
      ></v-select>
      <v-select
        full-width
        color="#9C27B0"
        :items="option.pointOptions"
        label="League Point"
        return-object
        item-text="title"
        @change="changeCurrent()"
      ></v-select>
    </div>
    <div class="league-img" v-if="selectedOptionImgUrl">
      <img
        class="league"
        :src="require(`@/assets/images/${imgBasePath}/${selectedOptionImgUrl}`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
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
      selectedOptionImgUrl: null,
    };
  },

  methods: {
    changeCurrent() {
      if (this.league && this.division) {
        this.selectedOptionImgUrl =
          this.league.imgUrl + this.division.imgUrl + ".png";
        this.$emit("sendCurrent", this.league.rate + this.division.rate);
      }
    },
  },

  mounted() {
    this.league = this.option.leagueOptions[1];
    this.division = this.option.divisionOptions[0];
    console.log(this.option);
    console.log("2");
    this.selectedOptionImgUrl =
      this.league.imgUrl + this.division.imgUrl + ".png";

    if (this.league && this.division) {
      this.selectedOptionImgUrl =
        this.league.imgUrl + this.division.imgUrl + ".png";
      this.$emit("sendCurrent", this.league.rate + this.division.rate);
    }
  },
};
</script>

<style lang="scss" scoped>
.current-league-container {
  display: flex;
  justify-content: space-between;

  .league-options {
    width: 190px;
    height: 280px;
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
