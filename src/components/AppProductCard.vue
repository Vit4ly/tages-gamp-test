<template>
  <div class="card">
    <div class="card__image-block">
      <app-sale v-if='prices["old_price"] ?? false '></app-sale>
      <img :src="currentUrl" alt="" class="card__img">
    </div>

    <div class="card__inner">
      <div
          :class="{ 'card__code': !code ?? true}"
          class="card__info">
        <small class="card__id-product" v-show="code ?? ''">{{ code }}</small>
        <p class="card__title">{{ name }}</p>
        <span class="card__discount">{{ prices["old_price"] }}</span>
        <span class="card__actual-price">{{ prices["current_price"] }}</span>
      </div>

      <div class="card__inner__shopping">
        <div class="card__inner__shopping-basket">
          <app-shopping-label
              @addToShopping="$emit('addToShoppingCart')"
          ></app-shopping-label>
        </div>

        <div class="card__inner__shopping-favorites">
          <app-favourites-label
              @add="$emit('addToFavourites')"
          ></app-favourites-label>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AppSale from "@/components/AppSale";
import AppFavouritesLabel from "@/components/AppFavouritesLabel";
import AppShoppingLabel from "@/components/AppShoppingLabel";
import {mapGetters} from "vuex";

export default {
  name: "AppProductCard",
  emits: ['addToFavourites', 'addToShoppingCart'],
  props: {
    code: {type: String},
    name: {type: String},
    prices: {type: Object},
    img: {type: String},
    material: {type: Number},
    shopFlag: {type: Boolean},
    favourFlag: {type: Boolean}

  },
  methods: {},
  computed: {
    currentUrl() {
      return require(`../assets/pic/${this.img}.png`)
    }
  },
  components: {
    AppSale,
    AppFavouritesLabel,
    AppShoppingLabel
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  flex: 0 1 336px;

  &__image-block {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img {
    flex: 0 1 238px;
    height: auto;
    margin: 9px 49px;
    @media (max-width: 320px) {
      margin: 9px 20px;

    }
  }

  &__img img {
    max-width: 238px;

  }

  &__inner {
    display: flex;
    justify-content: space-between;
    margin: 0 12px 9px 22px;

    &__shopping-basket {
      position: relative;
      top: 74px;
      right: 30px;

    }

    &__shopping-favorites {
      position: relative;
      top: 52px;
      right: 5px;

    }
  }

  &__code {
    margin-top: 19px;

  }

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
