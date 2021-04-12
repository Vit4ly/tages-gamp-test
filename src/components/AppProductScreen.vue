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
          class="screen__block-elem"
      ></app-product-card>
    </div>
  </div>
</template>

<script>
import AppProductCard from "@/components/AppProductCard";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "AppProductScreen",
  mounted() {
    this.getProducts()

  },
  methods: {
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
  }
}
</style>
