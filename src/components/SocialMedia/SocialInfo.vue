<template class="background">
  <v-row>
    <v-col cols="12">
      <v-select
        :items="platforms"
        v-model="selectedPlatform"
        label="Platform"
      ></v-select>
    </v-col>
    <template v-if="selectedPlatform">
      <v-row style="padding: 1rem">
        <v-col cols="12">
          <v-select
            label="Methods"
            :items="socialOption(selectedPlatform).methods"
            return-object
            item-text="title"
            v-model="method"
            color="#FF7F50"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Amount" v-model="amount"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Link" v-model="link"></v-text-field>
        </v-col>
        <v-col cols="12" v-if="method && method.title === '10 Comments'">
          <v-textarea placeholder="Write Comments You Want"></v-textarea>
        </v-col>

        <v-col cols="12">
          <v-row justify="end" class="mb-2">
            <h4>
              <span class="mr-2">Price</span>
              <span v-if="method">
                {{ getTotalPrice(method.price, amount) }} €</span
              >
            </h4>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row justify="end">
            <v-btn color="primary" href="/purchase">Purchase</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SocialInfo",
  data() {
    return {
      selectedPlatform: null,
      method: null,
      amount: 1,
      link: "",
    };
  },

  computed: {
    ...mapGetters({
      socialOption: "getSocialOptions",
      platforms: "selectSocialPlatform",
      getTotalPrice: "calculateSocialPrice",
    }),
  },
};
</script>

<style lang="scss"></style>
