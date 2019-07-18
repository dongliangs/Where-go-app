<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
        </div>
        <div v-show="keyword" class="search-content" ref="search">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasnoData"> 没有找到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasnoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword() {
            if (this.timer){
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = [];
                return
            }
            this.timer = setTimeout (()=>{
                const result = [];
                for ( let i in this.cities){
                    this.cities[i].forEach( value=>{
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result;
            },10)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .search{
        height:.72rem;
        padding: 0 .1rem;
        background: $bgColor;
        .search-input{
            width:100%;
            height: .62rem;
            text-align: center;
            padding:0 .1rem;
            line-height: .62rem;
            color: #666666;
            border-radius: .06rem;
            box-sizing: border-box;
        }
    }
    .search-content{
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top:1.58rem;
        left:0;
        right:0;
        bottom:0;
        background: #eee;
        .search-item{
            line-height:.62rem;
            padding-left: .2rem;
            font-size: .26rem;
            color: #666;
            background: #fff;
        }
    }
</style>


