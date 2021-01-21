<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="ico-img"></slot></div>
    <div v-else><slot name="ico-img_active"></slot></div>
    <div :style="isStyleC"><slot name="ico-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    isStyleColor: {
      type: String,
      default: "red",
    },
  },

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isStyleC() {
      return this.isActive ? { color: this.isStyleColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>