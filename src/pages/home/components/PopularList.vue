<template>
    <div class="popular-list">
        <div class="popular-list-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span>本周热门榜单</span>
        </div>
        <ul class="popular-hotsale-list">
            <li class="popular-hostsale-item" v-for="item in hotList" :key="item.id">
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
    props:{
        hotList: Array
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

