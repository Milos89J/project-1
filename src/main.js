import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('uppercase', function(value){
  if (!value) return ''  //we create function uppercase and we can use this filter in our application

  return value.toUpperCase()
}) 
Vue.filter('appTime', function(timeNew){
  if (!timeNew) return ''  //filter, function for time in app

  return moment(timeNew).format('LLL')
}) 

new Vue({
  render: h => h(App),
}).$mount('#app')

