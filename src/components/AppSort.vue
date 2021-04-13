<template>
  <div class="set-container">
    <app-input-filter
        :sortSet="getSortPrice"
        v-model:title="valueSelectPrice"
    >Сортировать по:
    </app-input-filter>
    <app-input-filter
        :sortSet="getMaterial"
        v-model:title="valueSelectMaterial"
    >Материал
    </app-input-filter>
  </div>
</template>

<script>
import AppInputFilter from "@/components/AppInputFilter";
import {mapGetters} from 'vuex'

export default {
  name: "AppSet",
  computed: {
    ...mapGetters(['getMaterial', 'getSortPrice']),
    valueSelectPrice: {
      get() {
        return this.$store.state.valuePrice
      },
      set(valueSortPrice) {
        this.$store.commit('updateMessagePrice', valueSortPrice)
      }
    },
    valueSelectMaterial: {
      get() {
        return this.$store.state.valueMaterial
      },
      set(valueMaterial) {
        this.$store.commit('updateMessageMaterial', valueMaterial)
      }
    },
  },
  components: {
    AppInputFilter,
  }
}
</script>

<style scoped lang="scss">
.set-container {
  display: grid;
  grid-template-columns: repeat(2, 0.1fr);
  grid-gap: 24px;
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

}
</style>
