<template>
  <!-- <router-link class="content" to="/leagueoflegends"></router-link> -->
  <div class="content background"></div>
</template>

<script>
export default {
  name: "LostArkContainer",
};
</script>

<style lang="scss" scoped>
.background {
  background: url(@/assets/images/lostarkintro.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.content {
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
