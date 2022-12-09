<template>
  <div class="content background"></div>
</template>

<script>
export default {
  name: "Metin2Container",
};
</script>

<style lang="scss" scoped>
.background {
  background: url(@/assets/images/metin2.jpg);
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
