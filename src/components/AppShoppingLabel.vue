<template>
  <svg width="0" height="0" class="hidden">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" id="basket">
      <title>icon</title>
      <path
          d="M16.237 2.7c1.126.02 2.228.954 1.684 2.168-.106.236-.584 1.199-1.345 2.713-.31.619-.63 1.252-.948 1.883l-.308.61-.095.188a2.362 2.362 0 01-1.487 1.396l-.133.042H4.521l-1.776-.001c-.512.025-.92.434-.945.901l-.002.846c.031.515.443.926.902.954h.154a2.701 2.701 0 015.092 0h2.108a2.701 2.701 0 110 1.8H7.946a2.701 2.701 0 01-5.093-.001H2.65C1.226 16.117.087 14.978 0 13.5l.001-.945c.071-1.432 1.214-2.578 2.69-2.655l-.882-6.173L1.8 3.6c0-.582-.296-1.273-.636-1.614C1.075 1.898.683 1.8 0 1.8V0c1.117 0 1.925.202 2.436.714.302.301.567.698.768 1.14.146-.034.3-.052.46-.052zm-2.945 7.2a.563.563 0 00.26-.304l.045-.102.116-.23.308-.61.934-1.855.013-.026c.52-1.035.917-1.832 1.136-2.278L3.609 3.601l.882 6.173c.009.06.053.11.11.126zm-.692 6.3a.9.9 0 100-1.8.9.9 0 000 1.8zm-7.2-1.8a.9.9 0 100 1.8.9.9 0 000-1.8z"></path>
    </symbol>
  </svg>
  <svg
      @click="$emit('addToShopping'); added = !added"
      class="icon-shopping icon__add-shopping"
      :class="{'add-shopping': added}"
  >
    <use xlink:href="#basket"></use>
  </svg>
</template>

<script>
export default {
  name: "AppShoppingLabel",
  emits: ['addToShopping'],
  data() {
    return {
      added: false
    }
  }
}
</script>

<style scoped lang="scss">
.icon-shopping {
  width: 19px;
  height: 18px;

}
.add-shopping {
  fill: #eb5757;
}
</style>
