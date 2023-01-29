<template>
  <v-row class="top-container">
    <v-col class="top-element" cols="6">
      <router-link to="#pvp">
        <img
          class="element-link"
          :src="require('@/assets/images/metin2Pvp.png')"
          alt=""
        />
      </router-link>
    </v-col>
    <v-col class="top-element" cols="6">
      <router-link to="#official">
        <img
          class="element-link"
          :src="require('@/assets/images/metin2Official.png')"
          alt=""
        />
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TopContent",
};
</script>

<style lang="scss" scoped>
.top-container {
  background-image: url("@/assets/images/metin2content.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;

  .top-element {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }

    .element-link {
      caret-color: transparent;

      &:hover {
        transform: scale(1.2);
        transition: 0.4s;
      }
    }
  }
}
</style>
