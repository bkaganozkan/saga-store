<template>
  <div class="background">
    <router-link to="/metin2" class="content"></router-link>
  </div>
</template>

<script>
export default {
  name: "Metin2Container",
};
</script>

<style lang="scss" scoped>
.background {
  background: url(@/assets/images/metin2intro.jpeg);
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
