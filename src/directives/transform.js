import Vue from '../../node_modules/vue'

export default  Vue.directive('my-directive',{
  bind: function(el){
    console.log('diretiva associada')
    console.log(el)
  }
}) 



