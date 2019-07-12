<template>
    <div class="recommend-wrapper">
        <div class="recommend-title">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            <span>猜你喜欢</span>
        </div>
        <ul class="like-list">
            <li class="like-item border-bottom" v-for="like in likeList" :key="like.id">
                <div class="item-img-cont">
                    <img :src="like.imgUrl" :alt="like.likeTitle">
                </div>
                <div class="like-info">
                    <p class="like-title">
                        {{like.likeTitle}}
                    </p>
                    <div class="like-comment">
                        <span class="stars" v-for="(item) in 5" :key="item">
                            <i class="iconfont star-icon">&#xe81b;</i>
                            
                        </span>
                        <span class="star-comment-num">{{like.likeCommnet}}</span>
                    </div>
                    <div class="like-price">
                        <span class="mpg-price">
                            ¥<em>{{like.likePrice}}</em>
                        </span>起
                        <span class="like-address">{{like.likeAddress}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Recommend',
    data () {
        return {
            likeList: [
                {
                    id:'0000',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                    likeTitle:'上海迪士尼乐园',
                    likeCommnet:'249547条评论',
                    likePrice:'550',
                    likeAddress:'浦东新区'
                },
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1904/10/10ba58a425abc2ada3.img.jpg_200x200_5823f5d2.jpg',
                    likeTitle:'上海野生动物园',
                    likeCommnet:'58405条评论',
                    likePrice:'118',
                    likeAddress:'浦东新区'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
                    likeTitle:'上海海洋水族馆',
                    likeCommnet:'23950条评论',
                    likePrice:'145',
                    likeAddress:'浦东新区'
                },
                {
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1904/20/20dd895e78548b50a3.img.jpg_200x200_348c3831.jpg',
                    likeTitle:'上海长风海洋世界',
                    likeCommnet:'8213条评论',
                    likePrice:'138.01',
                    likeAddress:'普陀区'
                }
            ]
        }
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

