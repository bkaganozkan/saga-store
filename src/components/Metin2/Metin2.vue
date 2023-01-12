<template>
  <div class="content">
    <Header />
    <div>
      <TopContent />
      <Contact />
      <PVP class="mt-2" />
      <Official class="mt-2" />
    </div>
  </div>
</template>

<script>
import TopContent from "./TopContent.vue";
import Header from "@/components/Header.vue";
import PVP from "./PVP.vue";
import Official from "./Official.vue";
import Contact from "./Contact.vue";
export default {
  name: "Metin2",
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
  background-color: rgba($color: #222529, $alpha: 1);
  height: 100%;
  overflow: hidden;
  padding: 2rem 0rem;
}
.mt-2{
  margin-top: 2rem !important;
}
</style>
>
