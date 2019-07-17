<template>
    <div class="recommend-wrapper">
        <div class="recommend-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span>猜你喜欢</span>
        </div>
        <ul class="like-list">
            <li class="like-item border-bottom" v-for="i of like" :key="i.id">
                <div class="item-img-cont">
                    <img :src="i.imgUrl" :alt="i.descTitle">
                </div>
                <div class="like-info">
                    <p class="like-title">
                        {{i.descTitle}}
                    </p>
                    <div class="like-comment">
                        <span class="stars" v-for="(item) in 5" :key="item">
                            <i class="iconfont star-icon">&#xe81b;</i>
                            
                        </span>
                        <span class="star-comment-num">{{i.likeCommnet}}</span>
                    </div>
                    <div class="like-price">
                        <span class="mpg-price">
                            ¥<em>{{i.price}}</em>
                        </span>起
                        <span class="like-address">{{i.likeAddress}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Recommend',
    props: {
        like: Array
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public.scss';
    .recommend-wrapper {
        margin-top: 0.2rem;
        background: $white;
        .recommend-title {
            position: relative;
            padding: .25rem 0;
            img {
                width: .3rem;
                height: .3rem;
                display: inline-block;
                margin-left: .2rem;
                overflow: hidden;
                vertical-align: top
            }
            span {
                font-size: .32rem;
                line-height: .4rem;
            }
        }
        .like-list {
            margin-left:.24rem;
            .like-item {
                display: flex;
                overflow: hidden;
                padding: .2rem 0;
                .item-img-cont {
                    width: 2rem;
                    height: 2rem;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height:100%;
                    }
                }
                .like-info {
                    flex: 1;
                    overflow: hidden;
                    padding-left: 0.22rem;
                    .like-title {
                        font-size: .32rem;
                        height:.44rem;
                        padding-top: .26rem;
                    }
                    .like-comment {
                        margin-top: .14rem;
                        .stars{
                            height: .28rem;
                            line-height: .28rem;
                            .star-icon{
                                font-size: .24rem;
                                color:#ffb436
                            }
                        }
                        .star-comment-num {
                            font-size: .24rem;
                            color:$fontGray;
                            line-height: .34rem;
                            padding-left: .08rem;
                        }
                    }
                    .like-price{
                        margin-top: .24rem;
                        color:$fontGray;
                        font-size:.26rem;
                        .mpg-price{
                            color:#ff8300;
                            line-height: .4rem;
                            em {
                                font-size: .4rem;
                            }
                        }
                        .like-address {
                            position: absolute;
                            right:.24rem;
                        }                    
                    }
                }
            }
        }
    }
</style>

