<template>
  <div class="form-control">
    <label for="sort">
      <small class="form-control__label">
        <slot></slot>
      </small></label>
    <select name="" id="sort"
            class="form-control__select"
            @input="$emit('update:title', $event.target.value)"
    >
      <option selected  value="Выбрать">Выбрать</option>
      <option v-for="elem in sortSet"
              :key="elem.id"
              :value="elem.id"
              :title="elem.name"

      >{{ elem.name }}
      </option>
    </select>
  </div>
</template>

<script>
import icon from '@/assets/icon.png'
import '@/assets/arrow.svg'
import {mapMutations} from 'vuex'

export default {
  name: "AppInputFilter",
  emits: ['update:title'],
  props: {
    title: String,
    sortSet: {
      type: Array
    }
  },
  data() {
    return {
      arrow: icon
    }
  },
}
</script>

<style scoped lang="scss">

.form-control {
  max-width: 288px;
  position: relative;
  margin-bottom: 1rem;
  margin-right: 24px;

  &::after {
    content: ' ' url("../assets/arrow.svg");
    position: absolute;
    right: 16px;
    bottom: 7px;
    pointer-events: none;

  }

  &__label {
    letter-spacing: 0.36px;
    font-size: 12px;
    font-weight: 400;
    color: #4f4f4f;
    padding: 0 0 0 16px;

  }

  &__select {
    margin-top: 15px;

    &:focus {
      outline: none;

    }

    border: 0;
    padding: 9px 0 10px 16px;
    appearance: none;
    background-color: #f2f2f2;
    display: flex;
    width: 288px;

  }
}
</style>
