<template>
  <v-main>
    <Header />
    <v-container class="background" fluid>
      <v-row class="main-container">
        <v-col cols="3">
          <v-img src="@/assets/images/social-media.jpg"></v-img>
        </v-col>
        <v-col cols="6" class="info-container">
          <SocialInfo />
        </v-col>
      </v-row>
    </v-container>
    <!--Start of Tawk.to Script-->

    <!--End of Tawk.to Script-->
  </v-main>
</template>

<script>
import Header from "../Header.vue";
import SocialInfo from "./SocialInfo.vue";
export default {
  components: {
    Header,
    SocialInfo,
  },
};
</script>

<style lang="scss" scoped>
.background {
  background: rgba($color: #72eff8, $alpha: 0.2);
}
.main-container {
  margin: 5rem 3em;
  padding-top: 4rem;

  .info-container {
    // width: 500px;
    height: 100vh;
    // background-color: rgba($color: #000000, $alpha: 0.3);
  }
}
</style>
