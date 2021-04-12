<template>
  <div class="container ">
    <div class="set-container">
      <app-input-filter
          :sortSet="$store.state.sortPrice"
          v-model:title="valueSelectPrice"

      >
        Сортировать по:
      </app-input-filter>
      <app-input-filter
          :sortSet="$store.state.material"
          v-model:title="valueSelectMaterial"
      >
        Материал
      </app-input-filter>
    </div>
    <p>{{ $store.state.valueMaterial }}</p>
    <p>{{ $store.state.valuePrice }}</p>
    <app-product-screen></app-product-screen>
  </div>

</template>

<script>
import AppInputFilter from "@/components/AppInputFilter";
import AppProductScreen from "@/components/AppProductScreen";
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  name: "AppSet",

  data() {
    return {

    }
  },
  methods : {
...mapMutations(['setSortPrice']),
  },
  computed: {
...mapGetters([]),
    valueSelectPrice: {
      get () {
        return this.$store.state.valuePrice
      },
      set (value) {
        this.$store.commit('updateMessagePrice', value)
      }
    },
    valueSelectMaterial: {
      get () {
        return this.$store.state.valueMaterial
      },
      set (value) {
        console.log(value)
        this.$store.commit('updateMessageMaterial', value )
      }
    },
    watchValue() {
      return this.valuePrice
    }
  },
  components: {
    AppInputFilter,
    AppProductScreen
  }
}
</script>

<style scoped lang="scss">
.set-container {
  max-width: 600px;
  display: flex;
  justify-content: left;

}
</style>
