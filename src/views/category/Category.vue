<template>
  <div>
   <h1>分类111</h1>
   <SubCategory @emitMethods="faterMetherod" ref="child"></SubCategory>
   <button @click="callsubmethod">父组件调用子组件</button>
   {{submsg}}
  </div>
</template>

<script>
import SubCategory from './SubCategory'
export default {
  name: 'Category',
  submsg:'',
  components:{
    SubCategory
  },
  methods:{
    faterMetherod(params){
      console.log(params)
      alert(JSON.stringify(params))
    },
    callsubmethod(){
      console.log(this.$refs.child.subctgmsg);
      console.log(this.$refs.child);
      
      this.$refs.child.subCatey('父组件传入参数');
    }
  },
  computed:{
    submsg(){
      // return this.$refs.child.subctgmsg;
    }
  }
}
</script>

<style>
</style>
