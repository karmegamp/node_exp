import minimist from "minimist"

// const arg = process.argv.slice(2)

// arg.forEach(
//     (val, index) => console.log(`${val} ${index}`)
// )


// use the command "node cli_arg.js --kar=3"
const a = minimist(process.argv.slice(2))
console.log(a.kar)

