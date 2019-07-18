<template>
  <div class="main">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :icons="iconsList"></home-icons>
    <PopularList :hotList="hotList"></PopularList>
    <recommend :like="recommend"></recommend>
    <home-weekend :weekend="weekend"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/header/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import PopularList from './components/PopularList'
import Recommend from './components/recommend'
import HomeWeekend from './components/weekend'
import { mapState } from 'vuex'
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
      firstCity: '',
      swiperList:[],
      iconsList: [],
      hotList: [],
      recommend: [],
      weekend: []
    }
  },
  computed: {
    ...mapState(['city']) //映射
  },
  methods: {
    getHomeInfo(){
      this.$http.get('/api/index.json?city='+ this.city)
        .then(this.handleGetHomeInfo)
    },
    handleGetHomeInfo (res) {
      const result = res.data;
      if(res.status == 200 && result.ret){
        const dt = result.data;
        this.swiperList = dt.swiperList;
        this.iconsList = dt.iconList;
        this.hotList = dt.recommendList;
        this.recommend = dt.recommendList;
        this.weekend = dt.weekendList
      }
    }
  },
  mounted (){
    this.firstCity = this.city;
    console.log('mounted')
    this.getHomeInfo()
  },
  activated () { //当页面重新显示的时候会执行
    if (this.firstCity !== this.city) {
      this.getHomeInfo()
      this.firstCity = this.city
    }
    console.log('activeted')
  }
 
}
</script>

<style lang="scss" scoped>
  .main {
    background: #f5f5f5;
  }
</style>
