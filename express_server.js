import express from 'express'
const server = express()

server.get('/', (req, res) => {
    res.end('Hello Karmegam')
})


server.get('/greetings', (req, res) => {
    res.end('Hello Elankuil Karmegam')
})

server.listen(4000, () => console.log('listening on port 4000'))