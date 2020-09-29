<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">主页</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
                 ref="tabControl1" class="tab-control" v-show="isTabFixed">
    </tab-control>
    <custom-scroll class="content" ref="scroll" :probeType="3"
                   @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
                   ref="tabControl2">
      </tab-control>
      <goods-list :goods="showGoods"/>
    </custom-scroll>

    <!--监听组件中的原生组件时，必须加上.native-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import CustomScroll from "components/common/scroll/CustomScroll";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import { getHomeMultidata ,getHomeGoods } from "network/home";
  import { debounce } from "common/utils";

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      CustomScroll,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods:{
          pop:{page:0,list: []},
          news:{page:0,list: []},
          sell:{page:0,list: []}
        },
        currentType:'pop',
        isShowBackTop: false,

        tabOffsetTop:0,
        isTabFixed: false,

        saveY: 0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    mounted() {
      //图片加载完成的事件监听
      this.$nextTick(()=>{
        const refresh = debounce(this.$refs.scroll.refresh,200)
        this.$bus.$on('itemImageLoad',()=>{
          refresh()
        })
      })
    },
    activated() {
      console.log('activated');
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      console.log('deactivated');
      // this.saveY = this.$refs.scroll.scroll.y
      this.saveY = this.$refs.scroll.getScrollY()

    },
    methods:{
      tabClick(index){
        console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'news'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index

        this.$refs.scroll.refresh()
      },
      backClick(){
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000

        //觉得tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.$refs.scroll.refresh()
        //获取TabControl的offsetTop
        console.log('TabControl的offsetTop',this.$refs.tabControl2.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          res = {
            data:{
              list:[
                {
                  acm:"",
                  clientUrl:"",
                  cparam:"",
                  iid:"1m8x624",
                  itemMarks:'1525',
                  itemType: 7,
                  orgPrice:'￥129.00',

                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png"
                  }
                },
                {
                  cfav:"5",
                  price:'129.00',
                  title:'从的耳朵哈哈',
                  show:{
                    img:"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
                  }
                }
              ]
            }
          }
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          if(page > 1){
            this.$refs.scroll.finishPullUp()
          }
        })
      }

    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    /*padding-top: 44px;*/
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }



  /*.tab-control{*/
  /*  position: sticky;*/
  /*  top:44px;*/
  /*  z-index: 9;*/
  /*}*/
  /*.fixed{*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 44px;*/
  /*}*/
  .tab-control{
    position: relative;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content{*/
  /*  height: calc(100% - 49px);*/
  /*  !*height: 100%;*!*/
  /*  overflow: hidden;*/
  /*  !*margin-top: 44px;*!*/
  /*}*/

</style>
