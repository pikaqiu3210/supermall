<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="ico-img" src="../../../assets/img/tabbar/home.svg" alt="" />
      <img
        slot="ico-img_active"
        src="../../../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="ico-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img
        slot="ico-img"
        src="../../../assets/img/tabbar/category.svg"
        alt=""
      />
      <img
        slot="ico-img_active"
        src="../../../assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="ico-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img
        slot="ico-img"
        src="../../../assets/img/tabbar/shopcart.svg"
        alt=""
      />
      <img
        slot="ico-img_active"
        src="../../../assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="ico-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="ico-img" src="../../../assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="ico-img_active"
        src="../../../assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="ico-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../../components/common/tabbar/TabBar";
import TabBarItem from "../../../components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>