<template>
  <div class="container">
<aside>
  <nav>
    <router-link to="/saved">Ситема хранения</router-link>
  </nav>
</aside>

  </div>

</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      // isActive: true,
      // activeIndex: 0,
      // breadcrumb: [
      //   {name: 'Главная', path: '/'},
      //   {name: 'Ситема хранения', path: 'saved'},
      //   {name: 'Комплекты стелажных систем', path: 'set'}],

    }
  },
  mounted() {
    // if (this.breadcrumb.length) {
    //   this.activeIndex = this.breadcrumb.length - 1
    // }
  },
  methods: {
    // setActive(idx) {
    //   this.activeIndex = idx
    //
    //   if (this.activeIndex === this.breadcrumb.length - 1) {
    //     this.isActive = true
    //   } else {
    //     this.isActive = false
    //   }
    // }
  },
  computed: {
    // activeSteps() {
    //   return this.activeIndex
    // }
  },
  components: {}
}
</script>

<style scoped lang="scss">

</style>
