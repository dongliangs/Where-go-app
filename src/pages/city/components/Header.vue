<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <i class="iconfont icon-back">&#xe658;</i>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .header{
        position: relative;
        overflow: hidden;
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        color: $white;
        background: $bgColor;
        font-size: .32rem;
        .icon-back{
            position:absolute;
            top:0;
            left:0;
            width: .64rem;
            color: $white;
            text-align: center;
            font-size: .5rem
        }
    }
</style>


