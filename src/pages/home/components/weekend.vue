<template>
    <div class="weekend-wrapper">
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul class="like-list">
            <li class="like-item" v-for="like in likeList" :key="like.id">
                <div class="item-img-cont">
                    <img :src="like.imgUrl" :alt="like.likeTitle">
                </div>
                <div class="like-info">
                    <p class="like-title">
                        {{like.likeTitle}}
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
    data () {
        return {
            likeList: [
                {
                    id:'0000',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
                    likeTitle:'上海必打卡',
                    likeCommnet:'中西合璧，现代和传统各有各的精彩',
                },
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
                    likeTitle:'周末亲子爱玩',
                    likeCommnet:'走进自然或玩转乐园，感知大千世界，游乐项目惊险刺激，特色表演异彩纷呈，等你们~'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
                    likeTitle:'上海城市观光',
                    likeCommnet:'来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光',
                },
                {
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
                    likeTitle:'情迷博物馆',
                    likeCommnet:'走进艺术殿堂，电影博物馆生动演绎着电影人和电影背后的故事，你不想知道吗~',
                }
            ]
        }
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

