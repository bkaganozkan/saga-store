<template>
  <v-row class="pvp-container" justify="center" align="center">
    <v-col cols="12 d-flex jc-c ai-c" class="official-text-container my-4 pt-4">
      <h2>Metin2 Official Servers</h2>
    </v-col>
    <v-row class="server-container d-flex jc-c ai-c">
      <ServerCard
        v-for="(server, index) of officialServer.servers"
        :key="index"
        :serverInfo="server"
      />
    </v-row>
  </v-row>
</template>

<script>
import ServerCard from "./Components/ServerCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Official",
  components: {
    ServerCard,
  },
  computed: {
    ...mapGetters({
      officialServer: "getOfficialServerData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.pvp-container {
  flex-wrap: wrap;
  div > h2 {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
    color: whitesmoke;
  }
}

.official-text-container {
  background: linear-gradient(
    180deg,
    #222529,
    rgba(20, 40, 59, 0.921) 46%,
    #222529
  );
  height: 20vh;
}

.server-container {
  max-width: 70% !important;
}
.d-flex {
  display: flex;
}
.jc-c {
  justify-content: center;
}
.ai-c {
  align-items: center;
}
</style>
