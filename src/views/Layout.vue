<template>
  <div class="layout-container">
    <div class="content-container">
      <LeagueOfLegendsContainer />
    </div>
    <div class="content-container">
      <LostArkContainer />
    </div>
    <div class="content-container">
      <Metin2Container />
    </div>
    <div class="content-container">
      <SocialMediaContainer />
    </div>
  </div>
</template>

<script>
import LeagueOfLegendsContainer from "@/components/LayoutContainer/leagueOfLegends.vue";
import LostArkContainer from "@/components/LayoutContainer/lostArk.vue";
import Metin2Container from "@/components/LayoutContainer/metin2.vue";
import SocialMediaContainer from "@/components/LayoutContainer/socialMedia.vue";
export default {
  name: "Layout",
  components: {
    LeagueOfLegendsContainer,
    LostArkContainer,
    Metin2Container,
    SocialMediaContainer,
  },
};
</script>

<style lang="scss">
.layout-container {
  display: flex;
  .content-container {
    width: 25vw;
  }
}
</style>
