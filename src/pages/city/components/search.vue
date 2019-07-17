<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .search{
        height:.72rem;
        padding: 0 .1rem;
        background: $bgColor;
        .search-input{
            width:100%;
            height: .62rem;
            text-align: center;
            padding:0 .1rem;
            line-height: .62rem;
            color: #666666;
            border-radius: .06rem;
            box-sizing: border-box;
        }
    }
</style>


