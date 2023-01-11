<template>
  <div class="content background"></div>
</template>

<script>
export default {
  name: "SocialMediaContainer",
};
</script>

<style lang="scss" scoped>

.background {
  background: url(@/assets/images/socialintro.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:hover{
    background-color: rgba($color: #000000, $alpha: 1.0);
    transition: .3;
  }
}
.content {
  // background-color: rgb(165, 4, 138);
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
