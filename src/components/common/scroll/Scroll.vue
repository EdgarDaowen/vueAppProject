<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      // console.log(this.$refs.wrapper);
      // console.log(document.querySelector('.wrapper'));

      // setTimeout(()=>{
      //   this.$nextTick(()=>{
      //     this.scroll = new BScroll(this.$refs.wrapper,{})
      //   })
      // },500)

      this.scroll = new BScroll(document.querySelector('.wrapper'),{

      })

      // this.scroll = new BScroll('.wrapper',{
      //
      // })
    }
  }
</script>

<style scoped>

</style>
