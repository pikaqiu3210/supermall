<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.control-item {
  flex: 1;
  text-align: center;
}
.control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>