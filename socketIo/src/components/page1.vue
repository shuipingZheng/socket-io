<template>
  <div>
    <div class="page1" v-html="datas">
      <!-- <div class="list-left">
        <span></span>
      </div>
       <div class="list-right">
         <span></span>
       </div> -->
       {{datas}}
    </div>

  <div class="footer">
    
    <input type="text" v-model="text">
    <button @click="sendMessage">发送</button>
  </div>

  </div>
  
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
     id: '',
     text: '',
     users: {},
     datas: ""
    }
  },

  mounted() {
   
    
   // this.$socket.emit("message",'id_11')
  },
  methods: {
    sendMessage: function(){
      console.log(this.$socket.id)
      this.datas += '<div class="list-right"><span>'+this.text+'</span></div>'
       this.$socket.emit('chat', 'id', this.text)
      //this.$socket.emit('chatText', this.text);
      this.text = '';

     
    }
  },
  sockets: {
    connect (data) {
         var id = 'id';
         this.$socket.emit("addUser",id, (users) => {
            //this.users = users;
         });
    },
    message (val) {
      this.datas += '<div class="list-left"><span>'+val+'</span></div>'

    },
    chat (val){
      this.datas += '<div class="list-left"><span>'+val+'</span></div>'
    },
    disconnect: function(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page1{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #f0f0f0;
  padding: 8px;
  box-sizing: border-box;

}
.list-left{
  text-align: left;
  margin: 0 0 4px;
}
.list-left span{
  background: #fff;
  color: #000;
  border-radius: 4px;
  padding: 4px;
  display: inline-block;
}
.list-right span{
  background: green;
  color: #fff;
  border-radius: 4px;
  padding: 4px;
  display: inline-block;
}
.list-right{
  text-align: right;
   margin: 0 0 4px;
}

.footer{
  position: fixed;
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  z-index: 1;
}
input{
  width: 300px;
  height: 30px;
}
</style>
