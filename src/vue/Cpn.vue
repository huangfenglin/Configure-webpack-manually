<template>
<div class="zizujian">
    <h2>我是子组件1</h2>

    <p>我是子组件的内容</p>
    <h2>{{name}}</h2>
    </div>
</template>

<script>
// import Cpn from "./Cpn"
export default {
  name: "Cpn",
   data(){
      return {
        name:"IU"
      }
    },

}
</script>

<style soped>
  .zizujian{
    color: orange;
  }
</style>