<template>
  <div class="page2">
    {{msg}}

    <button @click="sendMessage">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
     id: '',
     msg: 'test'
    }
  },
  created(){
     this.$socket.id = 'id_11';
  },
  mounted() {
   // this.$socket.id = 'id_22';
    //console.log(this.$socket.id)
   // this.$socket.emit("message",'id_11')
  },
  methods: {
    sendMessage: function(){
      
      this.$socket.emit('chat', 'id_11');
    }
  },
  sockets: {
    connect (data) {
       
        
        this.$socket.emit("addUser",this.$socket.id,function(){
          alert(1)
        });
    },
    message (val) {
      console.log('接收到服务端消息2222', val);
    },
    login (val){
      console.log(val+"--id")
    },
    disconnect: function(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socketio{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #f7f7f7;
}
</style>
