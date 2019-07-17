<template>
  <header>
    <div class="header-left">
        <i class="iconfont back-icon">&#xe658;</i>
    </div>
    <div class="header-input"><i class="iconfont icon-search">&#xeb9c;</i><input type="text" placeholder="输入城市/景点/游玩主题"></div>
    <router-link to="/city">
        <div class="header-right">{{city}}<i class="iconfont arrow-icon">&#xe65a;</i></div>
    </router-link>
  </header>
</template>
<script>
export default {
  name: 'HomeHeader',
  props:{
      city: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public.scss';
    header {
        display: flex;
        height: .86rem;
        line-height: .86rem;
        background: $bgColor;
        color: $white;
        .header-left {
            width: .64rem;
            float: left;
            .back-icon {
                display: block;
                text-align: center;
                font-size: .52rem;
            }
        }
        .header-input {
            flex:1;
            height: .64rem;
            line-height: .64rem;
            border-radius: .1rem;
            margin: {
                top:0.12rem;
                left: .2rem;
            }
            padding-left: .2rem;
            background: $white;
            color: #cccccc;
        }
        .header-right {
            width: 1.24rem;
            float: right;
            text-align: center;
            color:#fff;
            .arrow-icon {
                font-size: .30rem;
            }
        }
    }
</style>
