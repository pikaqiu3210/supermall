<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @itemClick="itemClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollCont"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swiper
        :banners="banners"
        @SwiperImgLoad="SwiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @itemClick="itemClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="newGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowScroll"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";
import { getHomeMultdata, getGoodsdata } from "../../network/home";

import HomeSwiper from "./chridComps/HomeSwiper";
import RecommendView from "./chridComps/RecommendView";
import FeatureView from "./chridComps/FeatureView";
export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowScroll: false,
      tabOffSetTop: null,
      isFixed: false,
    };
  },
  created() {
    this.getHomeMultdatas();
    this.getGoodsdata("pop");
    this.getGoodsdata("new");
    this.getGoodsdata("sell");
  },
  mounted() {
    //1.图片加载完成的事件监听
    const refresh = this.debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  computed: {
    newGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //事件监听方法
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    //防抖动函数
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scrollCont(position) {
      //1、判断backTop是否隐藏
      this.isShowScroll = -position.y > 1000;
      //2.tabControl 是否吸顶
      this.isFixed = -position.y > this.tabOffSetTop;
    },
    //上拉加载更多
    loadmore() {
      this.getGoodsdata(this.currentTye);
      this.$refs.scroll.scroll.refresh();
      console.log(
        this.currentTye + "4122" + this.getGoodsdata(this.currentTye)
      );
    },
    //网络请求方法
    getHomeMultdatas() {
      getHomeMultdata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    getGoodsdata(type) {
      let page = this.goods[type].page + 1;
      getGoodsdata(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        console.log(this.$refs.scroll.finishPullUp() + "wwwwwwww");
      });
    },
    //2.获取tab-control 的offsetTop
    // this.tabOffSetTop = this.$refs.TabControl;
    SwiperImgLoad() {
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
.home-nav {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>