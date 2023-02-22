<template>
  <v-row style="color: white" class="contact-container mt-16">
    <v-col cols="4" style="display: flex; justify-content: center">
      <div style="justify-self: center" class="col-text">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="yellow"
            class="bi bi-currency-yen"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"
            ></path>
          </svg>
        </span>
        Metin 2 Yang
      </div>
    </v-col>
    <v-col cols="4" style="display: flex; justify-content: center">
      <div style="justify-self: center" class="col-text">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="aqua"
            class="bi bi-chat-dots-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            ></path>
          </svg>
        </span>
        Contact
      </div>
    </v-col>
    <v-col cols="4" style="display: flex; justify-content: center">
      <div style="justify-self: center" class="col-text">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
            ></path>
          </svg>
        </span>
        Discord
      </div>
    </v-col>
    <div>
      <v-row justify="center" class="banner-container">
        <v-col cols="7">
          <v-img
            src="@/assets/images/metin2buy.png"
            max-height="500"
            contain
          ></v-img>
        </v-col>
        <v-col cols="4">
          <v-img
            src="@/assets/images/metin2purchase.png"
            max-height="500"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-container {
  padding: 1rem;
  background: #2c2939;
  height: 10vh;
}
.col-text {
  color: #f8f9fa;
  font-size: 24px;
  font-weight: 600;
  text-align: center;

  &:hover {
    scale: 1.2;
    transition: 0.4s;
  }
}
.banner-container {
  position: relative;
  margin-top: 2rem;
  width: 100vw;
}
</style>
