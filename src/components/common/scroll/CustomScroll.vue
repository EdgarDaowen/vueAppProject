<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'

  BScroll.use(PullUp)

  export default {
    name: "Scroll",
    data(){
      return{
        scroll: null
      }
    },
    props:{
      probeType:{
        type:Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    mounted() {
      this.$nextTick(()=>{
        // setTimeout(()=>{
        // },100)
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:this.probeType,
          click:true,
          pullUpLoad: this.pullUpLoad
        })

        if (this.probeType === 2 || this.probeType === 3){
          this.scroll.on('scroll',position => {
            this.$emit('scroll',position)
          })
        }

        if(this.pullUpLoad){
          this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
          })
        }
      })
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{})
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
