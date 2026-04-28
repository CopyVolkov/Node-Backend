import { platform, release, arch, cpus } from "node:os"
console.log("Información del sistema operativo:")
console.log('-------------------------------------------')
console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo:',release())
console.log('Arquitectura del sistema operativo:', arch())
console.log('Número de CPU:', cpus().length)