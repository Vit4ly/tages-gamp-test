<template>
  <div class="card">
    <div class="card-block-img">
      <app-sale v-if='prices["old_price"] ?? false '></app-sale>
      <img :src="currentUrl" alt="" class="card-img">
    </div>
    <div class="card-inner">
      <div
          :class="{ 'card-code': !code ?? true}"
          class="card-info">
        <small class="card-info__id-product"
               v-show="code ?? ''"
        >{{ code }}</small>
        <p class="card-info__title">{{ name }}</p>
        <span class="card-info__discount">{{ prices["old_price"] }}</span>
        <span class="card-info__actual-price">{{ prices["current_price"] }}</span>
      </div>
      <div class="card-inner__shopping">
        <img src="../assets/basket.svg" alt="" class="card-inner__shopping__basket">
        <img src="../assets/favorite.svg" alt="" class="card-inner__shopping__favorite">
      </div>
    </div>
  </div>
</template>

<script>
import AppSale from "@/components/AppSale";

export default {
  name: "AppProductCard",
  props: {
    code: {type: String},
    name: {type: String},
    prices: {type: Object},
    img: {type: String},
    material: {type: Number},

  },
  computed: {
    currentUrl() {
      return require(`../assets/pic/${this.img}.png`)
    }
  },
  components: {
    AppSale
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  flex: 1 0 336px;

}

.card-block-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}

.card-img {
  flex: 1 0 238px;
  height: auto;
  margin: 9px 49px;

}

.card-img img {
  max-width: 238px;

}

.card-inner {
  display: flex;
  justify-content: space-between;
  margin: 0 12px 9px 22px;


  &__shopping {
    &__basket {
      position: relative;
      top: 72px;
      right: 27px;

    }

    &__favorite {
      position: relative;
      top: 73px;
      right: 12px;

    }
  }
}

.card-code {
  margin-top: 19px;
}

.card-info {

  &__id-product {

    color: #888888;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2px;
    line-height: 14px;
    text-align: left;
    text-transform: uppercase;

  }

  &__title {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.32px;
    line-height: 22.4px;
    text-align: left;

  }

  &__discount {
    width: 43px;
    color: #888888;
    font-weight: 400;
    letter-spacing: 0.32px;
    line-height: 22.4px;
    text-align: left;
    text-decoration: line-through;
    margin-right: 8px;

  }

  &__actual-price {
    font-weight: 400;
    letter-spacing: 0.32px;
    line-height: 22.4px;
    text-align: left;

  }
}
</style>
