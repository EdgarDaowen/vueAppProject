<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'

  export default {
    name: "Scroll",
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      this.$nextTick(()=>{
        setTimeout(()=>{
          this.scroll = new BScroll(this.$refs.wrapper,{})
        },100)
      })
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{})

    }
  }
</script>

<style scoped>

</style>
