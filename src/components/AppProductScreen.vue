<template>
    <div class="screen">
      <div class="screen__block">
        <app-product-card
            v-for="item in getProductList"
            :key="item.code"
            :code="item.code"
            :name="item.name"
            :prices="item.price"
            :img="item.image.url"
            :material="item.material"
            @addToShoppingCart="addToShoppingCart(item)"
            @addToFavourites="addToFavourites(item)"
        ></app-product-card>
      </div>
    </div>
</template>

<script>
import AppProductCard from "@/components/AppProductCard";
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  name: "AppProductScreen",
  mounted() {
    this.getProducts()
  },
  methods: {
    ...mapMutations(['addToFavourites', 'addToShoppingCart']),
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['getProductList'])
  },
  components: {
    AppProductCard
  }
}
</script>

<style scoped lang="scss">
.screen {
  margin-top: 41px;

  &__block {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 414px) {
      grid-template-columns: 0.5fr;
    }
  }
}
</style>
