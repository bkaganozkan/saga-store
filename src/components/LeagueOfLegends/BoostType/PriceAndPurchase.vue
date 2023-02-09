<template>
  <v-row justify="space-between">
    <v-col cols="4">RESİM</v-col>
    <v-col cols="4">
      {{ priceInfo }}

      <v-btn color="primary"> Purchase </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    priceInfo: Object,
  },
  watch: {
    priceInfo: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
