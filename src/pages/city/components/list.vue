<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    当前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <span class="button">上海</span>
                    </div>
                    <div class="button-wrapper">
                        <span class="button">北京</span>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    热门城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <span class="button">{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key">
                <div class="title border-topbottom">
                    {{key}}
                </div>
                <ul class="item-list">
                    <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
                        {{innerItem.name}}
                    </li>
                </ul>
            
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .list{
        position: absolute;
        overflow: hidden;
        top: 1.58rem;
        left:0;
        bottom:0;
        right:0;
    }
    .border-topbottom{
        &:before{
            border-color: #cccccc;
        }
        &:after {
            border-color: #cccccc;
        }
    }
    .border-bottom{
        &:before{
            border-color: #cccccc;
        }
    }   
    .title{
        padding: .2rem 0 .2rem .2rem;
        background:#eee;
        font-size: .26rem;
        color: #666666;
    }
    .button-list{
        padding:.1rem .6rem .1rem .1rem;
        overflow: hidden;
        .button-wrapper{
            float: left;
            width: 33.33%;
            .button{
                display: block;
                margin: .1rem;
                padding: .1rem 0;
                line-height: .32rem;
                text-align: center;
                border: .02rem solid #cccccc;
                border-radius: .06rem;
            }
        }
    }
    .item-list{
        .item{
            line-height: .6rem;
            padding-left: .2rem;
            color:#666;
        }
    }
</style>


