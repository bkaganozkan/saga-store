<template>
  <div class="main">
    <Header />
    <v-container class="main-container">
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
                  <v-icon large color="green darken-2">
                    mdi-check-circle
                  </v-icon>
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
          <div class="left-area">
            <h6 class="left-area-title">PLEASE READ THE WARNING!</h6>
            <p class="left-area-content">
              Delivery time of the order " 15 Minutes " Delivery information
              after purchase My Orders from the relevant order page DETAIL You
              can learn by clicking the button. After receiving your Game Money,
              do not return it to anyone. In the game Anathema Yang He
              definitely won't talk to you.. Get information by contacting live
              support for any questions or problems that may arise during
              delivery. LOSSES CAUSED BY THESE TYPE OF ERRORS Anathema Yang NOT
              RESPONSIBLE.
            </p>
          </div>
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
    </v-container>
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
$left-area-bgColor : #ffe699;
$left-area-textColor: #977e38;

@function toRem($value) {
    $remValue: ($value / 16) + rem; 
    @return $remValue;
}

input {
  margin: 0 !important;
}

.main {
  height: 100%;
  padding: 0;
  margin: 0;

  &-container{
    margin-top: toRem(80);
    height: calc(100% - toRem(80));
  }

  &-row {
    height: 100%;
  }
}

.lostark-img {

  & img {
    height: 83%;
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
  background: $left-area-bgColor;
  height: 80%;
  padding: 1rem;
  color: $left-area-textColor;

  &-title{
    margin-bottom: 1rem;
  }

  &-content{
    text-align: justify;
    font-size: toRem(16);
  }
}

.discord-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
  justify-content: center;

  & p {
    font-weight: 600;
    font-size: 1.2rem;
  }

  & .discord-btn {
    margin-top: 1rem;
  }

  & img {
    width: 35%;
  }
}
</style>
