<template>
  <div class="background">
    <router-link class="content" to="/lostArk"></router-link>
  </div>
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

  &:hover {
    background-color: rgba(82, 83, 54, 0.5) !important;
    transition: 0.3s;
  }
}
</style>
