import chalk from "chalk"

// node trace.js 2> error.log

const f2 = () => console.error(console.trace())
const f1 = () => f2()
const root = () => f1()

console.time('trace')
root()
console.timeEnd('trace')

// colouring the console log
console.log('\x1b[35m%s\x1b[0m', 'Done')
console.log(chalk.green('Done'))