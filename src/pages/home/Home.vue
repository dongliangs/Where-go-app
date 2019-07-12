<template>
  <div class="main">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <PopularList></PopularList>
    <recommend></recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/header/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import PopularList from './components/PopularList'
import Recommend from './components/recommend'
import HomeWeekend from './components/weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    PopularList,
    Recommend,
    HomeWeekend
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background: #f5f5f5;
  }
</style>
