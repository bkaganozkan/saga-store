<template>
  <v-main v-if="isFetched">
    <Header />
    <TopContainer />
    <v-card class="card-container">
      <v-card width="100%" elevation="2">
        <v-tabs
          centered
          icons-and-text
          v-model="tab"
          hide-slider
          continuous
          color="#7757f7"   
          class=""  
        >
          <v-tab
            :href="'#' + boostCat.tabName"
            class="tab-title"
            v-for="(boostCat, index) in boostCategory"
            :key="index"
          >
            <img
              class="title-icon"
              :class="[tab == boostCat.tabName ? 'active' : '']"
              :src="boostCat.icon"
              alt=""
            />
            <span class="title">{{ boostCat.name }}</span>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            :value="tab"
            style="display: flex; justify-content: center"
            class="card-container"
          >
            <v-card flat max-width="80%" class="pa-12">
              <v-card-text>
                <BoostType :boostType="getBoostTypesByCategory(tab)" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-card>
  </v-main>
</template>

<script>
import BoostType from "./boostType.vue";
import Header from "@/components/Header.vue";
import TopContainer from "@/components/TopContainer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "RiotGames",
  components: {
    BoostType,
    Header,
    TopContainer,
  },
  data() {
    return {
      tab: "tab-lol",
      loadedData: false,
    };
  },
  methods: {
    ...mapActions(["fetchLoLDataData", "fetchValorantData"]),
  },
  async created() {
    this.loadedData = await this.fetchLoLDataData();
    // this.fetchValorantData();
  },

  computed: {
    ...mapGetters({
      boostCategory: "getBoostCategory",
      getBoostTypesByCategory: "getBoostTypesByCategory",
      isFetched: "isFetched",
    }),
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 50px;
  //   padding: 1.75rem;
  display: flex;
  justify-content: center;
}

.v-ripple__container {
  display: none !important;
}
.tab-title .active {
  filter: invert(33%) sepia(89%) saturate(2316%) hue-rotate(236deg)
    brightness(98%) contrast(98%);
}
.tab-title {
  display: flex;
  justify-content: space-between;
  flex-direction: row !important;

  //
  &:hover {
    filter: invert(33%) sepia(89%) saturate(2316%) hue-rotate(236deg)
      brightness(98%) contrast(98%);
  }
  .title {
    margin-left: 20px;
  }
  .title-icon {
    width: 50px;
    height: 50px;
  }
}
.card-container {
  background-color: #8C9EFF;
  padding: 1rem;
  margin-top: 0px !important;
}
</style>
