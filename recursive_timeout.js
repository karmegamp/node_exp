const i = () => {
    console.time()
    console.log('funcion i')
    console.timeEnd()
}

setInterval(i, 1000)

// alternative to setInterval, since the execution time may not be the same there.
const f = () => {
    console.time()
    console.log('function f')
    console.timeEnd()   
    setTimeout(f, 1000)
}

setTimeout(f, 1000)