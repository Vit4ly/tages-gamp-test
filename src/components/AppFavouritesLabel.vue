<template>
  <svg width="0" height="0" class="hidden">
    <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 19" id="favorites">
      <title>icon</title>
      <path
          d="M19.9 6.408c0
            2.734-1.524
            5.375-4.364
            7.929-1.49
            1.34-3.393
            2.667-4.756
            3.373l-.78.403-.78-.403c-1.363-.706-3.266-2.033-4.756-3.373C1.624
            11.783.1 9.142.1 6.407.1 2.788
            2.545 0 5.91 0c1.255
            0 2.138.17
            3.12.655.341.17.662.37.961.601a5.55
            5.55 0 011.001-.63C11.955.156 12.795
             0 14.098 0 17.432.014 19.9 2.826
             19.9 6.408zM14.094 1.8c-1.046
             0-1.623.107-2.31.443a3.776 3.776
             0 00-1.126.842l-.656.712-.662-.707a3.84
             3.84 0 00-1.108-.821c-.709-.35-1.324-.469-2.323-.469C3.595
             1.8 1.9 3.733
             1.9 6.408c0
             2.142 1.272
             4.346 3.768
             6.59 1.36
             1.224 3.109
             2.447 4.332 3.088 1.223-.641 2.972-1.864
             4.332-3.087C16.828
             10.754 18.1 8.55 18.1 6.408c0-2.638-1.72-4.598-4.006-4.608z"></path>
    </symbol>
  </svg>

  <svg
      @click="$emit['add']"
      class="icon"
      :class="{'add-shopping': getFlagFavourites}">
    <use xlink:href="#favorites"></use>
  </svg>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "AppFavouritesLabel",
  emits: ['add'],
  computed: {
    ...mapGetters(['getFlagFavourites'])

  }
}
</script>

<style scoped lang="scss">
.icon {
  width: 20px;
  height: 19px;

}

.icon-shopping {
  width: 19px;
  height: 18px;

}

.add-shopping {
  fill: #eb5757;
}
</style>
