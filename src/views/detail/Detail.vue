<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import {getDetail ,Goods } from "network/detail";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return {
        iid: null,
        topImages:[],
        goods:{}
      }
    },
    filters:{
      showDate(value){
        //时间戳转换成Date对象
        const date = new Date(value * 1000)

      }
    },
    created() {
      this.iid = this.$route.params.id
      getDetail(this.iid).then(res=>{
        console.log(res);
        res = {
          result:{
            itemInfo:{
              topImages:[
                "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
                "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
                "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
                "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
              ],
              title:'',
              desc:'',
              price:'',
              oldPrice:'',
              discountDesc:'',
              lowNewPrice:''
            },
            columns:[],
            shopInfo:{
              services:''
            }
          }
        }
        this.topImages = res.result.itemInfo.topImages

        this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)

      })
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
