
const {jisuan} = require('./js/mathUtils.js');
require('./css/normal.css');
require('./css/special.less');
require('./img/test.jpg')
import Vue from 'vue';
console.log(jisuan(10,20));
// import App from './vue/app.js';
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template:'<App/>',
  components: {
    App,
  }
})
document.writeln('<img src="./img/test.jpg">')
console.log("123");



