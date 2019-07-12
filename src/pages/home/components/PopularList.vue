<template>
    <div class="popular-list">
        <div class="popular-list-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span>本周热门榜单</span>
        </div>
        <ul class="popular-hotsale-list">
            <li class="popular-hostsale-item" v-for="item in hostsaleList" :key="item.id">
                <a href="javascript:;">
                    <div class="hostsale-tag" v-if="item.topImg">
                        <img :src="item.topImg" alt="">
                    </div>
                    <div class="hostsale-imgcon">
                        <img :src="item.imgUrl" :alt="item.descTitle">
                    </div>
                    <div class="hostsale-desc">
                        <p class="hostsale-sight">
                            {{item.descTitle}}
                        </p>
                        <p class="hostsale-price">
                            <span>¥<em>{{item.price}}</em></span>起
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PopularList',
    data () {
        return {
            hostsaleList: [
                {
                    id: '0.1',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
                    topImg: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
                    descTitle: '上海迪士尼乐园',
                    price:'538'
                },
                {
                    id: '0.2',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
                    topImg: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
                    descTitle: '上海欢乐谷',
                    price:'213'
                },
                {
                    id: '0.3',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_250x250_170cb921.jpg',
                    topImg: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
                    descTitle: '上海海昌海洋公园',
                    price:'159'
                },
                {
                    id: '0.4',
                    imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
                    descTitle: '东方明珠',
                    price:'70'
                },
                {
                    id: '0.5',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_250x250_cf952d13.jpg',
                    descTitle: '上海野生动物园',
                    price:'538'
                },
                {
                    id: '0.6',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
                    descTitle: '上海迪士尼乐园',
                    price:'538'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .popular-list {
        margin-top: 0.2rem;
        background: $white;
        .popular-list-title {
            position: relative;
            padding: .25rem 0;
            font-size: 0;
            img {
                display: inline-block;
                overflow: hidden;
                width: .3rem;
                height: .3rem;
                margin-left: 0.2rem;
                margin-top: 0.05rem;
                vertical-align: top;
            }
            span {
                display:inline-block;
                margin-left: .08rem;
                height: .44rem;
                font-size: .32rem;
                line-height: .44rem;
            }
        }
        .popular-hotsale-list {
            padding: 0 .24rem;
            overflow-x: scroll;
            white-space: nowrap;
            .popular-hostsale-item {
                position: relative;
                display: inline-block;
                padding: .06rem 0 .2rem;
                width: 2rem;
                a {
                    display: block;
                    width:100%;
                    height:100%;
                    .hostsale-tag {
                        position:absolute;
                        top:0;
                        left:-.02rem;
                        z-index:1;
                        overflow: hidden;
                        width: .84rem ;
                        height: .4rem;
                        img {
                            width:100%
                        }
                    }
                    .hostsale-imgcon {
                        overflow: hidden;
                        width: 2rem;
                        height:0;
                        padding-bottom:100%;
                        img {
                            width:100%
                        }
                    }
                    .hostsale-desc {
                        margin-top: .12rem;
                        text-align: center;
                        .hostsale-sight {
                            @include ellipse;
                            @include popular-desc;
                        }
                        .hostsale-price {
                            @include popular-desc;
                            span {
                                color:#ff8300;
                                em {
                                    font-size: .28rem;
                                }
                            }
                        }
                    }
                }

            }
            .popular-hostsale-item:not(:first-child){
                margin-left: .12rem;
            }
        }
    }
</style>

