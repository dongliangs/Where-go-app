<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgSrc">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList:[
        {id: '01', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/dbfef1d67bc878110fadd6fa3666c9e8.jpg_750x200_c602f6d2.jpg'},
        {id: '02', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/c8de32c5ae7eea6b0d5e16aabff56266.jpg_750x200_4249f421.jpg'},
        {id: '03', imgSrc: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/0ba6d3d25a22d6a0209e17292af2c16f.jpg_750x200_3b96e112.jpg'}
      ]
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