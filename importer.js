import * as exporter from "./exporter.js"

// importing deafult export
console.log(exporter.default.van)
console.log(exporter.default.name)

// importing non-default export
const g = new exporter.X()
g.greet()
console.log(exporter.bus)
console.log(exporter.car)