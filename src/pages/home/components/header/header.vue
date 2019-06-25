<template>
  <header>
    <div class="header-left">
        <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input"><i class="iconfont">&#xe632;</i><input type="text" placeholder="输入城市/景点/游玩主题"></div>
    <div class="header-right">城市<i class="iconfont arrow-icon">&#xe64a;</i></div>
  </header>
</template>
<script>
export default {
  name: 'HomeHeader'
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
                font-size: .4rem;
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
            .arrow-icon {
                font-size: .20rem;
            }
        }
    }
</style>
