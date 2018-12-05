<template>
  <div class="home">
    <div class="main-area home-container">
      <div class="home-nav">
        <my-nav :navData="navData"></my-nav>
      </div>
      <div class="home-main">
        <div class="search-wrapper">
          <mySearch></mySearch>
        </div>
      </div>
      <div style="height:500px;background-color: aqua;margin-top:40px;">其他</div>
    </div>
  </div>
</template>

<script>
import myNav from '@/components/nav'
import mySearch from '@/components/search'
export default {
  name: 'home',
  components: {
    myNav,
    mySearch
  },
  data(){
    return {
      navData: []
    }
  },
  // beforeRouteEnter(to, from, next){

  //   next(vm=>vm.setData(''))
  // },
  mounted(){
    this.initNavData()
  },
  methods: {
    setData(data){
      console.log(data)
    },
    initNavData(){
      var vm = this
      vm.axios('data/nav.json').then(res=>{
        vm.navData = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #f6f6f0;
}
.home-container{
  position: relative;
  .home-nav{
    position: absolute;
    left: 0;
    top: 0;
    width: 270px;
    background-color: #fff;
  }
  .home-main{
    height: 585px;
    margin-left: 290px;
    background-color: aquamarine;
  }
  .search-wrapper{
    padding: 10px 20px;
  }
}
</style>
