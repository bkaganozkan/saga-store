<template>
  <div class="whatsapp-container">
    <a href="https://wa.me/message/SABKVVNNR7OWL1">
      <img
        class="wp-btn-img"
        src="https://sageyangstore.com/static/media/whatsapp.c5d707ee9af93653d2a1.jpg"
        width="150"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.whatsapp-container {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1.25rem 0.5rem;
  border-radius: 25px;

  .wp-btn-img {
    border-radius: 25px 0 35px 0;
    cursor: pointer;
  }

  &:hover {
    filter: brightness(1.2);
  }
}
</style>
