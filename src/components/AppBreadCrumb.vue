<template>
  <nav class="container">
    <div class="nav-wrapper">
      <div class="col">
        <router-link
            v-for="({ name, path }, idx) in $store.state.breadcrumb"
            :key="name"
            @click="setActive(idx)"
            :class="{
                  active: $store.state.isActive,
                  done: activeSteps !== idx
                  }"
            :to=path
            class="breadcrumb"
        >
          {{ name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "AppBreadCrumb",
  methods: {
...mapMutations(['setActive']),

  },
  computed: {
    ...mapGetters(['activeSteps', 'filteredBreadcrumb']),
  },
}
</script>

<style scoped lang="scss">
.nav-wrapper {
  margin-top: 32px;
}

.col {
  display: flex;
  align-items: center;

a {
  color: #828282;
  text-decoration: none;

&:not(:last-of-type)::after {
   content: '/';
   pointer-events: none;
   cursor: none;
   padding: 0 14px 0 14px;
   position: relative;
   top: 1px;

 }
}
}


a.active {
  color: #000
}

a.done {
  color: #828282;
}
</style>
