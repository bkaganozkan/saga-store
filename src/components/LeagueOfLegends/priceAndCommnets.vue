<template>
  <v-col align-self="center" cols="12">
    <v-row justify="end" align-content="start">
      <div>
        <v-col cols="4">
          <div class="price-container">
            <div class="recent-price-container">
              <span class="price"> {{ price }} </span>
              <span class="price currency"> €</span>
            </div>
            <div class="ex-price-container">
              <span class="price"> {{ price + (price / 100) * 10 }} </span>
              <span class="price currency"> €</span>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <v-btn
            style="justify-self: end"
            href="https://discord.gg/Q4BkmGME"
            target="_blank"
            depressed
            plain
          >
            <v-img src="@/assets/images/discord.png" height="100" width="100">
            </v-img>
          </v-btn>
        </v-col>
      </div>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "PriceAndComments",
  props: {
    price: Number,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.border {
  border: 1px solid black;
}
.recent-price-container {
  box-sizing: border-box;
  font-size: 60px;
  font-weight: 300;
  line-height: 100%;
  color: #000;
  padding: 0;
  margin: 0 0 5px;
  white-space: nowrap;

  .price {
    display: inline;
    font-weight: 300;
    color: #000;
    text-align: left;
  }
  .currency {
    margin-left: 0.25rem;
  }
}

.ex-price-container {
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 300;
  line-height: 100%;
  color: #000;
  padding: 0;
  margin: 0 0 5px;
  white-space: nowrap;

  .currency {
    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      width: calc(100% + 100px);
      height: 4px;
      padding: 0;
      margin: 0;
      background: rgb(255, 0, 76);
      position: relative;
      left: -65px;
      top: -20px;
      border-radius: 2px;
      transform: rotate(-15deg);
      opacity: 0.8;
    }
  }
}
</style>
