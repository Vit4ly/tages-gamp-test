<template>
  <div id="nav" class="container">
    <app-bread-crumb></app-bread-crumb>
    <h1>{{ this.$store.state.breadcrumb[activeSteps].name }}</h1>

  </div>
  <router-view/>
</template>
<script>
import { mapGetters } from 'vuex'
import AppBreadCrumb from "@/components/AppBreadCrumb";
import AppInputFilter from "@/components/AppInputFilter";

export default {
  mounted() {
    if (this.$store.state.breadcrumb.length) {
      this.$store.state.activeIndex = this.$store.state.breadcrumb.length - 1
    }
  },
  computed: {
    ...mapGetters(['activeSteps'])
  },
  components: {
    AppBreadCrumb,
    AppInputFilter
  }
}
</script>
<style lang="scss">

</style>
