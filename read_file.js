import fs from 'node:fs'
import fsp from 'node:fs/promises'
import util from 'node:util'

let count = 0
const counter = () => count++

// Read and callback
fs.readFile(import.meta.filename, 'utf-8', (err, data) => {
    console.log(data)
    setImmediate(counter) 
})

// Read with sync
try{
    const fd = fs.openSync(import.meta.filename, 'r')
    console.log(fs.readFileSync(fd).toString())
    setImmediate(counter) 
} catch(err){
    console.log(err)
}

// Read with promise
async function fileread(){
    let handle
    try{
        handle = await fsp.open(import.meta.filename, 'r')
        console.log(await handle.readFile({encoding:'utf-8'}))
        setImmediate(counter) 
    } finally{
        await handle.close()
    }
}

fileread()

// Read with promisify
async function fileread_promisify(){
    const read = util.promisify(fs.readFile)
    let data = await read(import.meta.filename, 'utf-8')
    console.log(data) 
    setImmediate(counter) 
}
fileread_promisify()

setTimeout(() => console.log(count), 500)