<template>
<div class="container">
  <div id="nav" >
    <app-bread-crumb></app-bread-crumb>
    <h1 class="nav__title">{{ getBreadcrumb[activeSteps].name }}</h1>
    <app-sort></app-sort>
  </div>
  <router-view/>
</div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
import AppBreadCrumb from "@/components/AppBreadCrumb";
import AppSort from '@/components/AppSort'

export default {
  mounted() {
    if (this.getBreadcrumb.length) {
      this.setActiveIndex(this.getBreadcrumb.length - 1)
    }
  },
  methods: {
    ...mapMutations(['setActiveIndex'])
  },
  computed: {
    ...mapGetters(['activeSteps', 'getBreadcrumb'])
  },
  components: {
    AppBreadCrumb,
    AppSort
  }
}
</script>

<style scoped lang="scss">
.nav {
  &__title {
    font-size: 36px;
    @media (max-width: 414px) {
      font-size: 1.5em;
    }
    @media (max-width: 375px) {
      font-size: 1.3em;
    }
    @media (max-width: 320px) {
      font-size: 1em;
    }
  }
}
</style>
