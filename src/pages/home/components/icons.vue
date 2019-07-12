<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of iconsPages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img-content">
                        <img class="icon-img" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.iconDesc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconsList: [
                {
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    iconDesc: '景点门票'
                },
                {
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    iconDesc:'水上乐园'
                },
                {
                    id: '003',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
                    iconDesc:'魔都上海'
                },
                {
                    id: '004',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
                    iconDesc:'室内娱乐'
                },
                {
                    id: '005',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    iconDesc:'动植物园'
                },
                {
                    id: '006',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    iconDesc:'世纪公园'
                },
                {
                    id: '007',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                    iconDesc:'上海野生'
                },
                {
                    id: '008',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
                    iconDesc:'上海迪士尼'
                },
                {
                    id: '009',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    iconDesc:'清凉避暑'
                }
            ]
        }
    },
    computed: {
        iconsPages () {
            const pages = [];
            this.iconsList.forEach((item, index) => {
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
