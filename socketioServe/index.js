
const server = require('http').createServer();
const io = require('socket.io')(server);
const port = process.env.PORT || 2333;
const users = {};
var count = 0;

//监听客户端连接,回调函数会传递本次连接的socket
io.sockets.on('connection',(socket)=>{


	socket.on("addUser", (data,callback) => {
     

       var room = Object.keys(socket.rooms)[1];//这是当前socket的房间，这个对象设置得有点怪，但是事实如此。

       socket.rooms[data] = room;


       console.log(socket.rooms);

       // if(data in users){
       // 		callback();
       // }else{
       // 		socket.nickname = data;
       //      users[socket.nickname] = socket;
       //      callback();
       // }
        
       
    })

    socket.on('chat', function (roomid,msg) {
    	console.log(roomid)
        var room = socket.rooms[roomid]; //
        io.to(room).emit('chat', msg);
        console.log(room);//打印出房间。
    });


    var roomNum = 'room' + (++count);//自增实现socket进入不同房间
    socket.join(roomNum, function () {
       // console.log(socket.rooms);
    }); //加入房间后，打印出socket和room的信息


    

   
    socket.on("chatText", (data) => {
       // socket.user = 'vcpmLInFMOwohv67AAAH';
        
        socket.broadcast.emit('message',  data);

       // socket.to(data).emit('message', data+'哈哈哈哈');
       // socket.emit("login",'服务端回传')
    })


})


io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
io.set('origins', '*:*');








server.listen(port, ()=>{
    console.log("监听端口-----"+port);
})

