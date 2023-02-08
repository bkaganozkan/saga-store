<template>
  <v-main>
    <Header />
    <div class="main-container">
      <v-row class="card-container">
        <v-col cols="4" class="pa-0 left-container"> </v-col>
        <LostArkServers />
        <RightArea />
      </v-row>
    </div>
  </v-main>
</template>

<script>
import Header from "@/components/Header.vue";
import RightArea from "./lostArk-rightArea.vue";
import LostArkServers from "./lostArk-servers.vue";
export default {
  components: {
    Header,
    RightArea,
    LostArkServers
  },
};
</script>

<style lang="scss" scoped>

.main-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  background: rgba(#1e1e1e, 1);
  height: 100vh;

  & .card-container {
    position: absolute;
    width: 70vw;
    height: calc(100vh - 190px);
    border-radius: 41px;
    background: rgba($color: #f8f8f8, $alpha: 1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.3);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.3);
  }
}

.left-container {
  background: url(@/assets/images/lostarkintro.jpeg);
  border-radius: 41px 0px 0px 41px;
  width: 325px;
  height: 100%;
  background-repeat: no-repeat;
  filter: blur(1px);
  background-size: cover;
}

</style>
