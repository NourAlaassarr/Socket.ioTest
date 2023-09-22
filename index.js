import express from 'express'
import {Server} from'socket.io'
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
const ServerApp=app.listen(port,()=>{
    console.log(`server running on port number ${port}!.`)
})
const io = new Server(ServerApp)
io.on('Connection',(socket)=>{
    console.log(socket.id)
})