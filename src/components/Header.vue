<template>
  <v-app-bar fixed elevate-on-scroll dark elevation="2" height="90" c>
    <v-app-bar-title>
      <v-img src="@/assets/images/sagaIcon.png" width="75" height="125"></v-img>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-row justify="end">
      <v-col cols="2" class="link-container">
        <router-link to="/">Home</router-link>
      </v-col>
      <v-col cols="2" class="link-container">
        <router-link to="/leagueoflegends">Riot Games</router-link>
      </v-col>
      <v-col cols="2" class="link-container">
        <router-link to="/metin2">Metin 2</router-link>
      </v-col>
      <v-col cols="2" class="link-container">
        <router-link to="/lostark">Lost Ark</router-link>
      </v-col>
      <v-col cols="2" class="link-container">
        <router-link to="/socialmedia">Social Media</router-link>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "",
    };
  },
  mounted() {
    this.currentPath = this.$route.fullPath;

    // var x = document.querySelectorAll(".scroll");
    // console.log(x);
  },
};
</script>

<style lang="scss" scoped>
.link-container {
  padding: 2rem 0.25rem;
  a {
    color: white;
    font-weight: 500;

    &:hover {
      scale: 1.2;
      transition: 0.3;
      background: rgba($color: #fff, $alpha: 1);
      color: #000000;
      border-radius: 5px;
      text-align: center;
    }
  }
  display: flex;
  justify-content: center;
}
.color {
  color: white !important;
}
.v-toolbar__content {
  padding: 0px !important;
}
</style>
