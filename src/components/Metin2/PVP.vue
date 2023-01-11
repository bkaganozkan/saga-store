<template>
  <v-row class="pvp-container" justify="center" align="center">
    <v-col cols="12">PVP</v-col>
    <v-row class="server-container d-flex jc-c ai-c">
      <ServerCard
        v-for="(server, index) of pvpServer.servers"
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
  name: "PVP",
  components: {
    ServerCard,
  },
  computed: {
    ...mapGetters({
      pvpServer: "getPvpServerData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.pvp-container {
  flex-wrap: wrap;
}
.server-container {
  max-width: 80% !important;
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
