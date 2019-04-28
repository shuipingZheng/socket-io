// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIO  from 'vue-socket.io'
import socketio  from 'socket.io-client'

Vue.config.productionTip = false
//vue-socket.io  3.0版本写法
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:2333',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   }
// }));
Vue.use(VueSocketIO,socketio('http://localhost:2333',{transports:['websocket','xhr-polling','jsonp-polling']}));



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
