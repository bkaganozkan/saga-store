<template>
  <router-link class="content" to="/leagueoflegends"> </router-link>
</template>

<script>
export default {
  name: "LeagueOfLegendsContainer",
};
</script>

<style lang="scss" scoped>
.content {
  background: url(@/assets/images/lol.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
</style>
