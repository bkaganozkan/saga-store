<template>
  <div>
    <v-select
      :items="servers"
      v-model="selectedServer"
      placeholder="Server"
      @change="serverInfo()"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: { servers: Array },
  data() {
    return { selectedServer: "EU West" };
  },

  methods: {
    serverInfo() {
      this.$emit("sendServerInfo", this.selectedServer);
    },
  },
  mounted() {
    this.serverInfo();
  },
};
</script>

<style></style>
