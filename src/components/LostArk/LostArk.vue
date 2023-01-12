<template>
  <div class="main">
    <Header />
    <v-row class="main-row">
      <v-col cols="3" class="lostark-img">
        <img src="@/assets/images/lostark.jpeg" alt="LostArk" />
      </v-col>

      <v-col class="content">
        <v-row>
          <v-col class="content-left">
            <div>
              <p class="content-left-text">LOST ARK EUC (ALL SERVER)</p>
              <p class="content-left-text">1000 Gold</p>
              <p class="content-left-icon">
                <v-icon large color="green darken-2"> mdi-check-circle </v-icon>
                Available
              </p>
            </div>
          </v-col>
          <v-col class="content-right">
            <v-select
              color="#9C27B0"
              :items="getServerLocations"
              label="Server Location"
              outlined
              item-text="label"
              v-model="selectedServerLocation"
            ></v-select>

            <v-select
              color="#9C27B0"
              :items="getServerInfo"
              label="Server Name"
              return-object
              outlined
              item-text="name"
              v-model="selectedServer"
              @change="changedServer()"
            ></v-select>

            <v-text-field
              class="quantity-input"
              v-model="quantity"
              color="#9C27B0"
              label="Fiyat Adet"
              outlined
              @change="changedQuantity()"
            ></v-text-field>
            <p>
              <v-icon large> mdi-information-outline </v-icon>
              {{ totalAmount }} EUR
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="3">
        <div class="left-area"></div>
        <div class="discord-area">
          <p>BUY NOW Via Discord</p>
          <v-btn
            style="justify-self: end"
            href="https://discord.gg/Q4BkmGME"
            target="_blank"
            depressed
            plain
            class="discord-btn"
          >
            <v-img
              src="@/assets/images/discord.png"
              alt="Discord"
              height="100"
              width="100"
            >
            </v-img>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
export default {
  data: () => ({
    selectedServer: null,
    quantity: null,
    totalAmount: 0.0,
    selectedServerLocation: "all",
  }),
  computed: {
    ...mapGetters(["getServerLocations"]),
    getServerInfo() {
      return this.$store.getters.getServerInfo(this.selectedServerLocation);
    },
  },
  methods: {
    changedServer() {
      if (this.quantity == null) {
        this.quantity = 1;
      }

      this.calculateTotalAmount();
    },
    changedQuantity() {
      this.calculateTotalAmount();
    },
    calculateTotalAmount() {
      this.totalAmount = this.selectedServer.price * this.quantity;
    },
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
$green-color: #388e3c;

input {
  margin: 0 !important;
}

.main {
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;

  &-row {
    height: 100%;
  }
}

.lostark-img {
  height: 100%;
  & img {
    height: 100vh;
    width: 100%;
  }
}
.content {
  display: flex;
  align-items: center;

  &-right {
    p {
      display: flex;
      justify-content: end;
      align-items: center;

      i {
        margin-right: 1rem;
      }
    }
  }

  &-left {
    display: flex;
    align-items: center;

    &-text {
      margin: 0 !important;
      font-weight: 400;
    }

    &-icon {
      margin-top: 3rem;
      color: $green-color;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}
.left-area {
  background: yellow;
  height: 75%;
}

.discord-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;
  justify-content: center;

  & p {
    font-weight: 600;
    font-size: 1.2rem;
  }

  & .discord-btn {
    margin-top: 2rem;
  }

  & img {
    width: 35%;
  }
}
</style>
