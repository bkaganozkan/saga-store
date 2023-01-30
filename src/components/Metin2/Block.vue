<template>
  <div
    class="strip d-flex justify-content-around align-items-center"
    :style="{ 'margin-top': '550px' }"
  >
    <div class="best-prices text-light d-flex align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="green"
        class="bi bi-currency-dollar"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
        ></path>
      </svg>
      <span class="fs-3 m-2">Best Prices </span>
    </div>
    <div class="support d-flex text-light align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="yellow"
        class="bi bi-arrow-repeat"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
        ></path>
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
        ></path>
      </svg>
      <span class="fs-3 m-2">Online Support 7/24 </span>
    </div>
    <div class="secure-trade d-flex text-light align-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="pink"
        class="bi bi-lock"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
        ></path>
      </svg>
      <span class="fs-3 m-2">Secure Payment </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block",
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("resize", this.selectDiv);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.selectDiv);
  },
  methods: {
    selectDiv() {
      let container = document.querySelector(".banner-container");
      let containerSize = container
        ? container.scrollHeight + 50 + "px"
        : "550px";
      return containerSize;
    },
  },
};
</script>

<style lang="scss">
.fs-3 {
  font-size: 1.75rem;
  font-weight: 500;
}
.strip {
  height: 20vh;
  background: linear-gradient(
    180deg,
    #222529,
    rgba(20, 40, 59, 0.921) 46%,
    #222529
  );
}
</style>
