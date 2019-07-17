<template>
    <ul class="alphabet">
        <li class="alphabet-item">A</li>
        <li class="alphabet-item">A</li>
        <li class="alphabet-item">A</li>
        <li class="alphabet-item">A</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet'
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


