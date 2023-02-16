<template>
  <v-col cols="3" class="pa-0 right-container">
    <div class="right-area">
      <h6 class="left-area-title">PLEASE READ THE TEXT!!!!</h6>
      <p class="left-area-content">
        Fill in your information correctly before placing your order. If your
        order is less than 100k gold, you can put any item in your market. If
        your order is more than 100k gold, I suggest you put tier 3 relic
        jewelry in your market. The site does not communicate in-game. Be
        careful. The responsibility is not ours. Put your item on the market and
        just wait for us to buy!!!!
      </p>
      <p class="left-area-title
      ">ENJOY GAME</p>
    </div>
  </v-col>
</template>

<style lang="scss" scoped>
$left-area-bgColor: #ffe699;
$left-area-textColor: #977e38;

.right-container {
  background: $left-area-bgColor;
  height: 100%;
  color: $left-area-textColor;
  border-radius: 0px 41px 41px 0px;
  .left-area-title {
    font-size: 28px;
    font-weight: 700;
  }
  .left-area-content {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.8;
  }
  & .right-area {
    padding: 10px 5px;
  }
}
</style>
