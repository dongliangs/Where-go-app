<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- slides -->
      <swiper-slide  v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.wrapper .swiper-pagination-bullet-active {
  background: #ffffff !important
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  overflow: hidden;
  background: #eeeeee;
  .swiper-img {
    width: 100%;
  }
}
</style>