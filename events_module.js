import EventEmitter from 'events'

const e = new EventEmitter()

// simple event handling
const start = () => console.log('started')
e.on('start', start)
e.emit('start')

// event scheduling
const start_again = () => { 
    e.emit('start')
    console.log('again') 
}
setTimeout(start_again, 1000)

// event with multiple argument
e.on('multi-arg', (arg1, arg2) => {
    console.log(`${arg1}, ${arg2}`)
})
e.emit('multi-arg', 200, 300)

// one time event
e.once('kick-start', () => console.log('kick start'))
e.emit('kick-start')
e.emit('kick-start')

// remove event handler, and check again the same event
e.off('start', start)
e.emit('start')

// remove all events
e.removeAllListeners()
e.emit('multi-arg', 1, 2)