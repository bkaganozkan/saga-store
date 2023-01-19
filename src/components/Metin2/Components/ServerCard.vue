<template>
  <v-col lg="3" md="4" sm="6" class="card-container">
    <v-card class="serverCard" max-width="15rem">
      <v-img :src="serverInfo.serverLogo" max-height="200"></v-img>
      <div class="server-text">
        {{ serverInfo.serverName }} - {{ serverInfo.amount }}
      </div>
      <div class="centered">
        <span v-for="i in 5" :key="i">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="yellow"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="centered">
        <span class="server-text">
          {{ serverInfo.price }}
        </span>
      </div>

      <div class="buy-container d-flex-centered">
        <div class="buy bg-yellow w-75 d-flex-centered">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
            ></path>
          </svg>
          <span>BUY</span>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ServerCard",
  props: {
    serverInfo: Object,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  .serverCard {
    border: 1px solid #ffc107 !important;
    background-image: url(https://sageyangstore.com/static/media/f1.c476f548a9c5eff8960b.png);

    &:hover {
      scale: 1.1;
      transition: 0.3s;
    }
  }

  .server-text {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    text-decoration: none;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buy-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;

    .buy {
      border-radius: 0.25rem;
      width: 100%;
      cursor: pointer;
    }
    .bg-yellow {
      background-color: #ffc107;
    }
    .w-75 {
      margin: 0.5rem;
      padding: 0.275rem;
    }
    span {
      font-size: 20px;
      margin-left: 2px;
      font-weight: 400;
      color: #212529;
    }

    &:hover {
      scale: 1.1;
      transition: 0.5s;
    }
  }
}
.d-flex-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
