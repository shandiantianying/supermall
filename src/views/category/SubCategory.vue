<template>
  <div class='SubCategory'>
      <h1>子组件</h1>

      <button @click="clickMethod">子组件调用父组件方法</button>
  </div>
</template>

<script>
export default {
    name: 'SubCategory',
    data(){
        return {
            subctgmsg:'Subcategory message'
        }
    },
    mounted(){
        this.$emit('emitMethods',{"name":123})
    },
    methods:{
        clickMethod(){
            this.$emit('emitMethods','{"name":123}')
        },
        subCatey(params){
            console.log(params)
            console.log('父组件调用子组件方法。')
        }
    }
}
</script>

<style>

</style>