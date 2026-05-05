const fs = require('node:fs')
const stats = fs.statSync('archivo.txt', 'utf-8')
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)
