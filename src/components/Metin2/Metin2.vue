<template>
  <div class="content">
    <Header style="position: relative" />
    <TopContent />
    <Contact />
    <PVP />
    <Official />
  </div>
</template>

<script>
import TopContent from "./TopContent.vue";
import Header from "@/components/Header.vue";
import PVP from "./PVP.vue";
import Official from "./Official.vue";
import Contact from "./Contact.vue";
export default {
  name: "Metin 2",
  components: {
    Header,
    TopContent,
    PVP,
    Official,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
.content {
  background-color: rgba($color: #313131, $alpha: 1);
  height: 100%;
}
</style>
>
