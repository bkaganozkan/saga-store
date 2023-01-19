<template>
  <header>
    <!--Navigation-->
    <nav
      class="navbar navbar-top-default navbar-expand-lg navbar-simple nav-line"
    >
      <div class="container">
        <a href="#home" title="Logo" class="logo scroll">
          <!--Logo Default-->
          <img
            src="@/assets/images/sagaIcon.png"
            alt="logo"
            width="125px"
            class="logo-dark"
          />
        </a>
        <!--Nav Links-->
        <div class="collapse navbar-collapse" id="megaone">
          <div
            class="navbar-nav ml-auto"
            :class="currentPath == '/metin2' ? 'color' : ''"
          >
            <router-link class="nav-link scroll" to="/"> Home </router-link>
            <router-link class="nav-link scroll" to="/metin2">
              Metin 2</router-link
            >
            <router-link class="nav-link scroll" to="/leagueoflegends">
              Riot Games</router-link
            >
            <router-link class="nav-link scroll" to="/lostark">
              Lost Ark</router-link
            >
            <router-link class="nav-link scroll" to="/insbot">
              Social Media</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
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
.color {
  color: white !important;
}
</style>
