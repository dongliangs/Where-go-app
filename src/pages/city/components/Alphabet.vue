<template>
    <ul class="alphabet">
        <li class="alphabet-item" v-for="item of letters" :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd" 
        @click="handleLetterClick">{{item}}</li>
    </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    name: 'CityAlphabet',
    props:{
        cities: Object
    },
    data () {
        return {
            touchStatus: false, //定义标识位
            startY: 0,
            timer: null
        }
    },
    computed: {
        letters(){
            const letters = [];
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters;
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick(e){
            //console.log(e.target.innerText)
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true;
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
               //获取首字母距离滚动顶部的大小
               if(this.timer){
                   clearTimeout(this.timer)
               }
               this.timer = setTimeout( ()=> {  //函数节流
                    const touchY = e.touches[0].clientY - 79
                    //console.log(touchY)
                    const index = Math.floor((touchY - this.startY) / 25)
                    if (index >= 0 && index < this.letters.length){
                        this.$emit('change', this.letters[index])
                    }
               },10)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }

    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/public.scss';
    .alphabet{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position:absolute;
        top:1.58rem;
        right: 0;
        bottom:0;
        width:.4rem;
        .alphabet-item{
            text-align: center;
            font-size: .4rem;
            line-height: .5rem;
            color:$bgColor;
        }
    }
</style>


