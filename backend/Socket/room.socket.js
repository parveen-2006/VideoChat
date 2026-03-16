const roomSocket = (io) =>{
    io.on("connection" , (socket)=>{
       console.log("Connected" , socket.id);
       
       socket.on("join-room" , (roomId)=>{
        socket.join(roomId);
        socket.to(roomId).emit("User-joined" , socket.id);
       });

       socket.on("offer" , ({roomId ,offer})=>{
        socket.to(roomId).emit("offer" , {offer , from : socket.id});
       });

       socket.on("answer" , ({roomId , answer})=>{
        socket.to(roomId).emit("answer", answer);
       });

       socket.on("ice-candidate" , ({roomId , candidate})=>{
        socket.to(roomId).emit("ice-candidate" , candidate)
       });

       socket.on("disconnect" , ()=>{
        console.log("User disconnect :" , socket.id);
       })
    })
}


module.exports = roomSocket;