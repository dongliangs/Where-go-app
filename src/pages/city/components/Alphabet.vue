<template>
    <ul class="alphabet">
        <li class="alphabet-item" v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
        cities: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .alphabet{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position:absolute;
        top:1.58rem;
        right: 0;
        bottom:0;
        width:.4rem;
        .alphabet-item{
            text-align: center;
            line-height: .44rem;
            color:$bgColor;
        }
    }
</style>


