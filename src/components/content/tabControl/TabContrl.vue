<template>
  <div class='TabControl'>
      <div v-for="(item,index) in titles" :key="item" :class="{active: index === currentIndex}" @click="itemClick(index)"
      class="tab-control-item"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
    return {
        currentIndex:0
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
      itemClick(index){
          this.currentIndex = index;
      }
  }
}
</script>
<style scoped>
.TabControl{
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: darksalmon;

}
.active span{
    border-bottom: 3px solid darksalmon;
}
</style>
