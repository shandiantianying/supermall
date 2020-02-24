<template>
  <div id="home">
    <Navbar class="home-nav">
      <div slot="center">购物街</div>
    </Navbar>
    <Fauter></Fauter>
    <TabControl class="TabControl" :titles="['流行','新款','精选 ']"></TabControl>
   <h1>首页</h1>
 
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/NavBar'
import {getHomeData} from '../../network/home'
import Fauter from './childComps/Fauter'
import  TabControl from '../../components/content/tabControl/TabContrl'

export default {
  name: 'Home',
   components:{
    Navbar,Fauter,TabControl
  },
  data(){
    return{
      banners: [],
      recommends:[]
    }

  },
  created(){
    getHomeData().then(res=>{
      console.log(res)
      this.banners = res;
      this.recommends = res;
    })
  }
}
</script>

<style>
.home-nav{
  background-color: #ff8198;
  color: aliceblue;
  position:fixed;
  left: 0;
  right: 0;
}
.TabControl{
  position: sticky;
  top: 44px;
}
</style>
