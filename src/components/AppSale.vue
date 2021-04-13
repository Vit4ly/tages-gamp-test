<template>
  <div class=" card__sale">
    <span class="card__sale-title">скидка</span>
  </div>
</template>

<style scoped lang="scss">
.card {
  &__sale {
    position: absolute;
    left: 0;
    top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eb5757;

  }

  &__sale-title {
    padding: 3px 16px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    text-align: center;

  }
}
</style>
