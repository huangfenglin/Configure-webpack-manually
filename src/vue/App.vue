<template>
<div class="title">
    <h2>你好啊你好啊</h2>
    <button @click ="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
    </div>
</template>
<script>
import Cpn from "./Cpn"
export default {
  name: "App",
   data(){
      return {
        message: 'hello webpack',
        name:"张满月"
      }
    },
    components: {
      Cpn
    },
    methods: {
      btnClick(){
      }
    }

}
</script>

<style soped>
  .title{
    color: green;
  }
</style>

