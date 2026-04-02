// const repl = require('repl')
import repl from 'repl'

const local = repl.start('$ ')

local.on('exit', () => {
    console.log('exiting repl')
    process.exit()
})