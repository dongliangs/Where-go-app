<template>
  <div class="main">
    <home-header :city="city"></home-header>
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

import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    PopularList,
    Recommend,
    HomeWeekend
  },
  data () {
    return {
      city:''
    }
  },
  methods: {
    getHomeInfo(){
      this.$http.get('/api/index.json')
        .then(res => {
          res = res.data;
          let result = JSON.parse(JSON.stringify(res));
          if (result.ret){
            console.log(result.dataList.city)
          }
        })
    }
  },
  mounted (){
    this.getHomeInfo()
  }
 
}
</script>

<style lang="scss" scoped>
  .main {
    background: #f5f5f5;
  }
</style>
