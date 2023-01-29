<template>
  <div class="content">
    <Header />
    <div id="metin2">
      <TopContent />
      <Contact />
      <Block />
      <PVP class="mt-2" id="#pvp" />
      <Official class="mt-2" id="#official" />
    </div>
    <WhatsappButoon />
  </div>
</template>

<script>
import TopContent from "./TopContent.vue";
import Header from "@/components/Header.vue";
import Block from "./Block.vue";
import PVP from "./PVP.vue";
import Official from "./Official.vue";
import Contact from "./Contact.vue";
import WhatsappButoon from "@/components/Shared/WhatsappButton.vue";
export default {
  name: "Metin2",
  components: {
    Header,
    TopContent,
    PVP,
    Official,
    Contact,
    WhatsappButoon,
    Block,
  },
  data() {
    return {
      path: "",
    };
  },
  watch: {
    $route(newVal, oldVal) {
      var hashVal = newVal.hash;
      var element = document.getElementById(hashVal);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      } else {
        var element = document.getElementById("metin2");
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
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
.mt-2 {
  margin-top: 2rem !important;
}
</style>
>
