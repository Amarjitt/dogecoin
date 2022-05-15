import Ws from 'App/Services/Ws'
Ws.boot()

/**
 * Listen for incoming socket connections
 */
// Ws.io.on('connection', (socket) => {
//   console.log('socket connected')


//   socket.emit('news', { hello: 'world' })

//   socket.on('my other event', (data) => {
//     console.log(data)
//   })


var activeSockets: string[] = [];


  Ws.io.on("connection", socket => {
    console.log('a user connected!!')
    const existingSocket = activeSockets.find(
      existingSocket => existingSocket === socket.id
    );

    if (!existingSocket) {
      activeSockets.push(socket.id);
      console.log(activeSockets)

      socket.emit("update-user-list", {
        users: activeSockets.filter(
          existingSocket => existingSocket !== socket.id
        )
      });
      socket.broadcast.emit("update-user-list", {
        users: [socket.id]
      });
    }
    

    socket.on("call-user", (data: any) => {
      socket.to(data.to).emit("call-made", {
        offer: data.offer,
        socket: socket.id
      });
    });

    socket.on("make-answer", data => {
      socket.to(data.to).emit("answer-made", {
        socket: socket.id,
        answer: data.answer
      });
    });

    socket.on("reject-call", data => {
      socket.to(data.from).emit("call-rejected", {
        socket: socket.id
      });
    });

    socket.on("disconnect", () => {
      console.log('a user discoonected')
      activeSockets = activeSockets.filter(
        existingSocket => existingSocket !== socket.id
      );

      socket.broadcast.emit("remove-user", {
        socketId: socket.id
      });

      console.log(activeSockets)
    });
  });
