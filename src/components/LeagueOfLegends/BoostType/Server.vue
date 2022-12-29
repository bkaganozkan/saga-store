<template>
  <div>
    <v-select
      full-width
      color="#9C27B0"
      :items="option.serverOptinos"
      label="Server"
      return-object
      item-text="title"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "CurrentLeague",

  props: {
    option: Object,
  },

  mounted() {
  },
};
</script>

<style></style>
