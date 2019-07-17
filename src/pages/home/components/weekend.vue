<template>
    <div class="weekend-wrapper">
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul class="like-list">
            <li class="like-item" v-for="like in weekend" :key="like.id">
                <div class="item-img-cont">
                    <img :src="like.imgUrl" :alt="like.descTitle">
                </div>
                <div class="like-info">
                    <p class="like-title">
                        {{like.descTitle}}
                    </p>
                    <p class="star-comment-num">{{like.likeCommnet}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        weekend :Array
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/public.scss';
    .weekend-wrapper {
        .weekend-title {
            position: relative;
            height: .8rem;
            padding-left: .26rem;
            line-height: .8rem;
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
            .like-item {
                overflow: hidden;
                padding-bottom: .1rem;
                .item-img-cont {
                    overflow: hidden;
                    height:0;
                    padding-bottom:37.088%;
                    img {
                        width: 100%;
                    }
                }
                .like-info {
                    overflow: hidden;
                    padding: .14rem 0.22rem;
                    background:$white;
                    min-width: 0;
                    .like-title {
                        font-size: .28rem;
                        height:.48rem;
                        line-height: .48rem;
                        padding-right: 1rem;
                        @include ellipse;
                    }
                    .star-comment-num {
                        font-size: .24rem;
                        color:$fontGray;
                        line-height: .42rem;
                        padding-right: 1rem;
                        @include ellipse;
                    }
                    
                }
            }
        }
    }
</style>

