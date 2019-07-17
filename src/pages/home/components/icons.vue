<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of iconsPages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img-content">
                        <img class="icon-img" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    props:{
        icons: Array
    },
    computed: {
        iconsPages () {
            const pages = [];
            this.icons.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .icons {
        background-color: $white;
        padding: .2rem 0;
    }
    .icons >>> .swiper-container {
      height:0;
      padding-bottom:50%;
    }
    .icon {
        position: relative;
        float: left;
        width: 25%;
        height:0;
        padding-bottom:25%;
        .icon-img-content {
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom: .48rem;
            box-sizing: border-box;
            padding: 0.12rem .15rem 0.02rem;
            .icon-img {
                display:block;
                margin: 0 auto;
                height:100%
            }
        }
        .icon-desc {
            position: absolute;
            left:0;
            right:0;
            bottom: 0;
            line-height:.45rem;
            height:.48rem;
            text-align: center;
            color:#333;
            @include ellipse;
        }
    }
</style>
