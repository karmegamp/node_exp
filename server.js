import http from 'http'
import dotenv from 'dotenv'

// Priority: export > .env file > code
dotenv.config() // reads .env file
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {
    console.log('new connection request')
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('<H1>Hello Elankuil Karmegam </H1>')
})

const serverRef = server.listen(port, console.log(`listerning on port ${port} or 3000`))

// Use kill PID for this event to trigger SIGTERM signal
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received\n')
    serverRef.close( () => console.log('shutting down the server...'))
})




