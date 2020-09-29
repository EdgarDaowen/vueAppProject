import {debounce} from "./utils";

export const itemListenerMixin = {
  data(){
    return {
      itemImageListener:null
    }
  },
  mounted(){
    this.$nextTick(()=>{
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.itemImageListener = ()=>{
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImageListener)
    })
  }
}
