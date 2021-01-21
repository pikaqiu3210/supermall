<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link"></a>
      <img :src="item.image" alt="" @load="imgLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoda: false,
    };
  },
  props: {
    banners: {
      return: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if (!this.isLoda) {
        this.$emit("SwiperImgLoad");
        this.isLoda = true;
      }
    },
  },
};
</script>

<style>
</style>