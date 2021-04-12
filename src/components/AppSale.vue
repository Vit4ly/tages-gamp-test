<template>
<div class="sale">
  <span class="sale__title">скидка</span>
</div>
</template>

<script>
export default {
  name: "AppSale"
}
</script>

<style scoped lang="scss">
.sale {
  position: absolute;
  left: 0;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eb5757;

  &__title {

    padding: 3px 16px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
   }
}
</style>
