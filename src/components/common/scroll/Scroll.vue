<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 0) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
      console.log(this.scroll.finishPullUp() + "------------------------");
    },

    refresh() {
      console.log("eee");
      this.scroll.refresh;
    },
  },
  mounted() {
    //1.创建scroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: true,
    });
    //2.监听滚动
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    //3.上拉加载更多
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
};
</script>

<style>
</style>