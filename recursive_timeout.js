const i = () => {
    console.time()
    console.log('funcion interval')
    console.timeEnd()
}

setInterval(i, 1000)

// alternative to setInterval, since each interval execution time may not be same there.
const f = () => {
    console.time()
    console.log('function timeout')
    console.timeEnd()   
    setTimeout(f, 1000)
}

setTimeout(f, 1000)